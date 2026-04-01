# Regles SEO et metadonnees

## Meta obligatoires par page

Chaque page HTML doit contenir au minimum :

1. `<meta name="description">` — unique par page, 140-160 caracteres, incluant le mot-cle principal
2. `<meta name="robots" content="index,follow">` (sauf 404 qui est en `noindex`)
3. `<meta name="viewport">` — toujours `width=device-width, initial-scale=1.0`
4. `<meta name="theme-color" content="#090b12">`
5. `<link rel="canonical">` — URL absolue de la page

## Open Graph et Twitter Cards

Chaque page indexable doit avoir :

- `og:locale`, `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`
- `twitter:card` (toujours `summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`
- Image OG : 1200x630px minimum, format PNG ou JPEG

## Schema.org (JSON-LD)

- Page d'accueil : `ProfessionalService` avec `name`, `url`, `image`, `description`, `email`, `sameAs`, `serviceType`, `areaServed`
- Page contact : `ContactPage` avec reference au `ProfessionalService`
- Toujours placer le JSON-LD dans un `<script type="application/ld+json">` dans le `<head>`

## Titres et structure

- Un seul `<h1>` par page
- Hierarchie respectee : h1 > h2 > h3, pas de saut de niveau
- Balise `<title>` : format "Page | Studio B0ucher" ou "Studio B0ucher | Description courte"

## Sitemap et robots

- `sitemap.xml` a la racine, reference dans `robots.txt`
- Mettre a jour `<lastmod>` dans le sitemap a chaque modification significative
- URLs absolues dans le sitemap (`https://openapi-routeur.github.io/MonSiteBreton/...`)

## Performance SEO

- Polices servies localement (pas de Google Fonts CDN)
- Images en WebP avec fallback
- Attributs `loading="lazy"` sur les images sous la ligne de flottaison
- Attributs `width` et `height` sur toutes les images pour eviter le CLS
