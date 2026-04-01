---
name: deploy
description: Deploiement du site Studio B0ucher sur GitHub Pages
---

# Skill : Deploiement GitHub Pages

## Quand utiliser

Utiliser ce skill quand l'utilisateur demande de deployer, mettre en ligne, publier, ou pousser le site.

## Contexte

- Hebergement : GitHub Pages
- Branche de deploiement : `main`
- URL : `https://openapi-routeur.github.io/MonSiteBreton/`
- Depot : `openapi-routeur/MonSiteBreton`

## Instructions

1. Verifier que tous les fichiers sont commites (`git status`)
2. Verifier `site.config.json` (URL publique, `basePath`, e-mail de contact, Facebook)
3. Lancer `node tools/sync-site-config.mjs`
4. Verifier que le sitemap est a jour
5. Verifier que les meta OG, canonicals, `robots.txt`, `site.webmanifest` et les `_next` des formulaires pointent vers les bonnes URLs
6. Pousser sur `main` avec un message de commit clair
7. Attendre le deploiement GitHub Pages (1-2 min)
8. Tester les pages principales :
   - `https://openapi-routeur.github.io/MonSiteBreton/`
   - `https://openapi-routeur.github.io/MonSiteBreton/a-propos.html`
   - `https://openapi-routeur.github.io/MonSiteBreton/contact.html`
9. Tester le formulaire de contact
10. Verifier la page 404

## Erreurs courantes

- Oublier de relancer `node tools/sync-site-config.mjs` apres un changement d'URL ou d'e-mail
- Laisser des URLs anciennes dans les meta OG, le manifest ou les redirects de formulaire
- Pousser des fichiers de travail (brouillons, fichiers temporaires)
- Ne pas verifier que FormSubmit fonctionne apres deploiement
