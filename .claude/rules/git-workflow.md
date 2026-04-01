# Regles Git et workflow

## Branches

- `main` — branche de production, deployee sur GitHub Pages
- Travailler en commits directs sur `main` pour ce projet simple (pas de feature branches necessaires)
- Si une modification est risquee, creer une branche temporaire et merger apres verification

## Commits

- Messages de commit en francais
- Format : verbe a l'infinitif + description courte
  - Exemples : "Ajouter la section FAQ", "Corriger le fallback image Kreisker", "Optimiser les thumbnails en WebP"
- Un commit = une modification logique (pas de commits fourre-tout)
- Ne jamais committer de fichiers sensibles (cles API, mots de passe, .env)

## Fichiers a ne pas committer

Les fichiers suivants ne doivent PAS etre dans le depot :

- `node_modules/` (s'il y en a un jour)
- `.env`, `.env.local`
- Fichiers de travail temporaires (`.DS_Store`, `Thumbs.db`)
- Fichiers de build intermediaires

## Fichiers a garder dans le depot

- Tous les fichiers HTML, CSS, JS du site
- Assets (images, polices, favicons)
- Fichiers de configuration : `robots.txt`, `sitemap.xml`, `site.webmanifest`
- Dossier `.claude/` avec toute la configuration agent

## Deploiement

- Le site est deploye automatiquement via GitHub Pages depuis la branche `main`
- Apres chaque push, verifier que le site est accessible sur `https://openapi-routeur.github.io/MonSiteBreton/`
- Verifier que les URLs canoniques et OG sont correctes apres deploiement
