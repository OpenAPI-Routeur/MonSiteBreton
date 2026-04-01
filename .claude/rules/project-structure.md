# Regles de structure du projet

## Arborescence attendue

```
mon-site/
  .claude/                  ← configuration agent IA (ne pas supprimer)
    CLAUDE.local.md         ← instructions principales
    commands/               ← commandes executables par l'agent
    rules/                  ← regles obligatoires
    skills/                 ← competences specifiques
    agents/                 ← configurations agents
    settings.json           ← parametres globaux
    settings.local.json     ← parametres locaux (non commites si sensible)
  assets/
    fonts/                  ← fichiers .woff2 self-hosted
    fonts.css               ← declarations @font-face
    index.css               ← styles page d'accueil
    site-pages.css          ← styles pages secondaires
    contact-form.js         ← logique formulaire
    projects/               ← thumbnails des projets (WebP + PNG)
    og-studio-b0ucher.png   ← image Open Graph partagee
    favicon.svg / .png      ← favicons
    apple-touch-icon.png
  index.html                ← page d'accueil
  a-propos.html             ← page a propos
  contact.html              ← page contact
  politique-confidentialite.html
  404.html                  ← page d'erreur
  robots.txt
  sitemap.xml
  site.webmanifest
  favicon.ico
```

## Regles de placement

- **HTML** : toujours a la racine du projet, jamais dans un sous-dossier
- **CSS** : dans `assets/`, un fichier par contexte (`index.css` pour l'accueil, `site-pages.css` pour le reste)
- **JS** : dans `assets/`, un fichier par fonctionnalite (`contact-form.js`)
- **Images** : dans `assets/` ou `assets/projects/` selon le contexte
- **Polices** : dans `assets/fonts/`, declarees dans `assets/fonts.css`
- **Configuration agent** : dans `.claude/`, jamais dans un autre emplacement

## Fichiers orphelins a eviter

Ne pas laisser trainer a la racine :

- Des fichiers CSS non references dans le HTML (`styles.css`, `index.tailwind.css`)
- Des fichiers JS non references (`script.js` non charge)
- Des fichiers HTML de brouillon (`landing-section-tailwind.html`)
- Des fichiers de configuration de build non utilises (`tailwind.config.cjs`)

## Ajout de nouvelles pages

Pour ajouter une page :

1. Creer le fichier HTML a la racine en kebab-case
2. Inclure le head complet (meta, OG, Twitter, canonical, favicon, CSS)
3. Inclure la meme structure header/footer que les autres pages secondaires
4. Ajouter l'URL dans `sitemap.xml`
5. Ajouter le lien dans la navigation des autres pages si pertinent
