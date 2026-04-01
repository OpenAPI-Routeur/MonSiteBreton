# Commande : Deployer sur GitHub Pages

## Description

Deploie le site Studio B0ucher sur GitHub Pages via un push sur la branche `main`.

## Etapes

1. **Verifier l'etat du depot**
   ```bash
   git status
   ```
   S'assurer qu'il n'y a pas de fichiers non commites importants.

2. **Synchroniser la configuration publique**
   - Verifier `site.config.json` (URL publique, `basePath`, e-mail, Facebook)
   - Lancer `node tools/sync-site-config.mjs`
   - Verifier que toutes les pages sont listees dans `sitemap.xml`

3. **Verifier les URLs**
   - Les canonicals pointent vers la bonne URL publique
   - Les URLs OG et Twitter sont correctes
   - `robots.txt`, `site.webmanifest` et les redirects `_next` sont synchronises
   - Les liens internes fonctionnent

4. **Committer et pousser**
   ```bash
   git add -A
   git commit -m "Deployer : description des changements"
   git push origin main
   ```

5. **Verifier le deploiement**
   - Attendre 1-2 minutes que GitHub Pages se mette a jour
   - Tester l'URL principale : `https://openapi-routeur.github.io/MonSiteBreton/`
   - Tester les pages secondaires : a-propos, contact, politique-confidentialite
   - Tester la page 404
   - Tester le formulaire de contact

## Points de vigilance

- Ne jamais pousser de fichiers sensibles
- Verifier que les references de travail restent dans `.claude/references/`
- S'assurer que FormSubmit fonctionne avec et sans JavaScript
