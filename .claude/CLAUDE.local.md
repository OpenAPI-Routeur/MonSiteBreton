# Studio B0ucher — Instructions Projet

## Identite

- **Projet** : Studio B0ucher — site vitrine statique pour un studio web independant base en Bretagne
- **Stack** : HTML statique, CSS custom (pas de framework), JavaScript vanilla
- **Hebergement** : GitHub Pages (`openapi-routeur.github.io/MonSiteBreton/`)
- **Cible** : artisans, restaurants, commerces locaux en Finistere et Bretagne
- **Tarif affiche** : 800 EUR le site vitrine livre

## Architecture

```
mon-site/
  index.html              ← page d'accueil (hero, creations, approche, tarifs, cadre, studio, contact, FAQ)
  a-propos.html           ← page a propos
  contact.html            ← page contact avec formulaire
  politique-confidentialite.html
  404.html                ← page d'erreur personnalisee
  robots.txt
  sitemap.xml
  site.webmanifest
  favicon.ico
  assets/
    fonts/                ← polices self-hosted (IBM Plex Sans, IBM Plex Mono, Gloock, Playfair Display)
    fonts.css             ← declarations @font-face
    index.css             ← styles page d'accueil (classes Tailwind-like custom)
    site-pages.css        ← styles pages secondaires (systeme .card/.panel/.shell)
    contact-form.js       ← logique formulaire avec fallback mailto
    projects/             ← thumbnails projets (WebP + PNG fallback)
    og-studio-b0ucher.png ← image Open Graph
    favicon.svg / favicon.png / apple-touch-icon.png
  .claude/                ← configuration agent IA
    commands/             ← commandes executables
    rules/                ← regles obligatoires du projet
    skills/               ← competences specifiques
    agents/               ← configurations agents
```

## Regles globales

1. **Pas de framework JS/CSS** — tout est en vanilla HTML/CSS/JS. Ne jamais ajouter React, Vue, Tailwind CLI, etc.
2. **Polices self-hosted** — ne jamais ajouter de lien Google Fonts ou CDN externe pour les polices
3. **Accessibilite** — toujours maintenir les attributs ARIA, skip links, focus-ring, support clavier
4. **SEO** — chaque page doit avoir : meta description, canonical, Open Graph, Twitter Card, schema.org si pertinent
5. **Images** — toujours fournir du WebP avec fallback PNG via `<picture>` quand possible
6. **FormSubmit** — le formulaire passe par FormSubmit avec fallback mailto en JS
7. **Langue** — tout le contenu visible est en francais, les commentaires de code peuvent etre en francais ou anglais

## Conventions de nommage

- Fichiers HTML : kebab-case (`a-propos.html`, `politique-confidentialite.html`)
- Classes CSS : kebab-case, pas de BEM strict, prefixes semantiques (`hero-`, `contact-`, `faq-`, `panel-`, `card-`)
- Variables CSS : prefixe par categorie (`--color-cyber-`, `--spacing-`, `--font-`)
- Assets images : kebab-case avec suffixe format (`kreisker-thumbnail.webp`)

## Commandes disponibles

Voir `.claude/commands/` pour les commandes executables :
- `deploy.md` — deploiement sur GitHub Pages
- `review.md` — audit qualite du code
- `optimize.md` — optimisation images et performance
- `cleanup.md` — nettoyage des fichiers orphelins

## Regles detaillees

Voir `.claude/rules/` pour les regles completes par domaine.
