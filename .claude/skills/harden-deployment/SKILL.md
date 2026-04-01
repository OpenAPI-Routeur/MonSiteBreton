---
name: harden-deployment
description: Align and harden deployment URLs, SEO metadata, manifest entries, sitemap data, and contact redirects for the Studio B0ucher static site. Use for domain changes, GitHub Pages maintenance, and deploy preparation.
argument-hint: "[url ou objectif optionnel]"
disable-model-invocation: true
context: fork
agent: deployment-hardener
---

Harden the deployment metadata and URL management for the Studio B0ucher site.

Scope:
- Audit all public URLs and path prefixes.
- Reduce duplication when a single source of truth makes maintenance safer.
- Keep canonicals, OG tags, sitemap, robots, manifest, and contact redirects aligned.

Rules:
1. Preserve static hosting compatibility.
2. Avoid adding a framework or a heavy build chain.
3. Keep human-editable files understandable.
4. After changes, verify every affected page or metadata file.

Expected output:
- A map of where the public URL is defined.
- The hardening changes.
- A concise verification summary.
