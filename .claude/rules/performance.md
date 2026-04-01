# Regles de performance

## Objectifs Lighthouse

- Performance : > 90
- Accessibilite : > 95
- Best Practices : > 90
- SEO : > 95

## Images

- **Format** : WebP en priorite, PNG en fallback via `<picture>`
- **Compression** : les thumbnails WebP doivent etre < 100 Ko
- **Dimensions** : toujours specifier `width` et `height` pour eviter le CLS (Cumulative Layout Shift)
- **Lazy loading** : `loading="lazy"` sur les images sous la ligne de flottaison
- **Eager loading** : `loading="eager"` sur l'image hero et la premiere creation visible
- **Decoding** : `decoding="async"` sur toutes les images

### Poids actuels a surveiller

Les PNG bruts dans `assets/projects/` pesent 1-3 Mo chacun. Ils ne doivent PAS etre charges directement — toujours passer par le WebP.

## CSS

- Pas de fichier CSS non utilise dans le HTML (eviter la dette technique)
- Minification recommandee avant deploiement en production
- Pas de `@import` en CSS — un seul `<link>` par fichier
- Placer les `<link rel="stylesheet">` dans le `<head>` pour eviter le FOUC

## JavaScript

- Pas de JS bloquant dans le `<head>` (sauf JSON-LD qui est inerte)
- Scripts places en fin de `<body>` ou avec `defer`
- Pas de bibliotheque externe (pas de jQuery, lodash, etc.)
- Taille JS totale < 10 Ko

## Polices

- Self-hosted en `.woff2` uniquement (format le plus compresse)
- `font-display: swap` dans les declarations @font-face
- Limiter le nombre de graisses chargees (actuellement 4 familles, surveiller le poids total)

## Reseau

- Pas de requete vers des CDN externes (sauf FormSubmit pour le formulaire)
- Pas de tracking, pas d'analytics, pas de cookies tiers
- Activer la compression gzip/brotli cote hebergeur (GitHub Pages le fait par defaut)
