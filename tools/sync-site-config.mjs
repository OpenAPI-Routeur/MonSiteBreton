import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const configPath = path.join(rootDir, "site.config.json");
const config = JSON.parse(await fs.readFile(configPath, "utf8"));

const htmlFiles = [
  "index.html",
  "a-propos.html",
  "contact.html",
  "politique-confidentialite.html",
  "404.html",
];

const pagePaths = {
  "index.html": config.pages.home,
  "a-propos.html": config.pages.about,
  "contact.html": config.pages.contact,
  "politique-confidentialite.html": config.pages.privacy,
};

const currentDate = new Date().toISOString().slice(0, 10);
const baseUrl = config.site.baseUrl.replace(/\/+$/, "");
const basePath = normalizeBasePath(config.site.basePath);
const ogImageUrl = buildAbsoluteUrl(config.site.ogImagePath);
const contactPageUrl = buildAbsoluteUrl(config.pages.contact);
const formAction = `https://formsubmit.co/${config.contact.email}`;
const ajaxAction = `https://formsubmit.co/ajax/${config.contact.email}`;
const facebookDisplay = config.contact.facebookUrl.replace(/^https?:\/\/(www\.)?/, "");

for (const fileName of htmlFiles) {
  const filePath = path.join(rootDir, fileName);
  let content = await fs.readFile(filePath, "utf8");

  content = content.replace(/mailto:[^"?<\s]+/g, `mailto:${config.contact.email}`);
  content = content.replace(
    /(<span[^>]*id="contact-direct-email"[^>]*>)[^<]+(<\/span>)/g,
    `$1${config.contact.email}$2`
  );
  content = content.replace(
    /(<a[^>]*href="mailto:[^"]*"[^>]*>)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}(<\/a>)/gi,
    `$1${config.contact.email}$2`
  );
  content = content.replace(
    /(E-mail\s*:\s*)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,
    `$1${config.contact.email}`
  );
  content = content.replace(
    /https:\/\/www\.facebook\.com\/[A-Za-z0-9._-]+/g,
    config.contact.facebookUrl
  );
  content = content.replace(
    /facebook\.com\/[A-Za-z0-9._-]+/g,
    facebookDisplay
  );

  if (pagePaths[fileName]) {
    const pageUrl = buildAbsoluteUrl(pagePaths[fileName]);

    content = replaceRequired(
      content,
      /<meta property="og:url" content="[^"]+">/,
      `<meta property="og:url" content="${pageUrl}">`,
      `${fileName}: og:url`
    );

    content = replaceRequired(
      content,
      /<meta property="og:image" content="[^"]+">/,
      `<meta property="og:image" content="${ogImageUrl}">`,
      `${fileName}: og:image`
    );

    content = replaceRequired(
      content,
      /<meta name="twitter:image" content="[^"]+">/,
      `<meta name="twitter:image" content="${ogImageUrl}">`,
      `${fileName}: twitter:image`
    );

    content = replaceRequired(
      content,
      /<link rel="canonical" href="[^"]+">/,
      `<link rel="canonical" href="${pageUrl}">`,
      `${fileName}: canonical`
    );

    content = content.replace(
      /"url": "https?:\/\/[^"]+"/,
      `"url": "${pageUrl}"`
    );
    content = content.replace(
      /"image": "https?:\/\/[^"]+"/,
      `"image": "${ogImageUrl}"`
    );
    content = content.replace(
      /"sameAs": \[\s*"https?:\/\/[^"]+"\s*\]/,
      `"sameAs": [\n          "${config.contact.facebookUrl}"\n        ]`
    );
  }

  if (content.includes("data-contact-form")) {
    if (content.includes('data-ajax-action="')) {
      content = content.replace(
        /data-ajax-action="[^"]+"/g,
        `data-ajax-action="${ajaxAction}"`
      );
    } else {
      content = replaceRequired(
        content,
        /action="[^"]+"\r?\n(\s*)method="POST"/,
        `action="${formAction}"\n$1data-ajax-action="${ajaxAction}"\n$1method="POST"`,
        `${fileName}: data-ajax-action`
      );
    }

    content = content.replace(
      /(\s)action="[^"]*formsubmit\.co[^"]*"/g,
      `$1action="${formAction}"`
    );
    content = content.replace(
      /name="_next" value="[^"]+"/g,
      `name="_next" value="${contactPageUrl}?sent=1"`
    );
    content = content.replace(/data-copy-value="[^"]+"/g, `data-copy-value="${config.contact.email}"`);
    content = content.replace(/data-mailto="[^"]+"/g, `data-mailto="${config.contact.email}"`);
  }

  await fs.writeFile(filePath, content);
}

const manifest = {
  name: config.site.name,
  short_name: config.site.shortName,
  start_url: withBasePath("/"),
  display: "standalone",
  background_color: "#040816",
  theme_color: "#071326",
  icons: [
    {
      src: withBasePath("/assets/favicon.png"),
      sizes: "64x64",
      type: "image/png",
    },
    {
      src: withBasePath("/assets/apple-touch-icon.png"),
      sizes: "180x180",
      type: "image/png",
    },
  ],
};

await fs.writeFile(
  path.join(rootDir, "site.webmanifest"),
  `${JSON.stringify(manifest, null, 2)}\n`
);

const sitemapEntries = [
  config.pages.home,
  config.pages.about,
  config.pages.contact,
  config.pages.privacy,
]
  .map(
    (pagePath) => [
      "  <url>",
      `    <loc>${buildAbsoluteUrl(pagePath)}</loc>`,
      `    <lastmod>${currentDate}</lastmod>`,
      "  </url>",
    ].join("\n")
  )
  .join("\n");

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  sitemapEntries,
  "</urlset>",
  "",
].join("\n");

await fs.writeFile(path.join(rootDir, "sitemap.xml"), sitemap);

const robots = [
  "User-agent: *",
  "Allow: /",
  "",
  `Sitemap: ${buildAbsoluteUrl("/sitemap.xml")}`,
  "",
].join("\n");

await fs.writeFile(path.join(rootDir, "robots.txt"), robots);

function normalizeBasePath(value) {
  if (!value || value === "/") {
    return "";
  }

  const trimmed = value.replace(/\/+$/, "");
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function withBasePath(relativePath) {
  if (relativePath === "/") {
    return `${basePath || ""}/` || "/";
  }

  return `${basePath}${relativePath}`;
}

function buildAbsoluteUrl(relativePath) {
  return relativePath === "/"
    ? `${baseUrl}/`
    : `${baseUrl}${relativePath}`;
}

function replaceRequired(content, pattern, replacement, label) {
  if (!pattern.test(content)) {
    throw new Error(`Missing pattern for ${label}`);
  }

  return content.replace(pattern, replacement);
}
