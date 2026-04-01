# Commande : Audit qualite du code

## Description

Effectue une revue complete du code du site pour verifier la conformite avec les regles du projet.

## Checklist de revue

### HTML
- [ ] Chaque page a un `<h1>` unique
- [ ] Hierarchie des titres respectee (h1 > h2 > h3)
- [ ] Meta description unique par page
- [ ] Canonical present et correct
- [ ] Open Graph et Twitter Cards complets
- [ ] Schema.org JSON-LD present sur les pages cles
- [ ] Attribut `lang="fr"` sur `<html>`
- [ ] Skip link present
- [ ] Navigation avec `aria-label`

### CSS
- [ ] Pas de fichier CSS orphelin (non reference dans le HTML)
- [ ] Pas de `!important` injustifie
- [ ] Variables CSS coherentes
- [ ] Media queries en mobile-first

### JavaScript
- [ ] Pas de `console.log` en production
- [ ] Pas de code commente
- [ ] Gestion d'erreurs sur les operations async
- [ ] Elements verifies avant attachement de listeners

### Images
- [ ] Toutes les images ont un `alt`
- [ ] `width` et `height` specifies
- [ ] WebP utilise avec fallback quand necessaire
- [ ] `loading="lazy"` sous la ligne de flottaison

### Accessibilite
- [ ] Navigation complete au clavier
- [ ] `aria-expanded` synchronise sur les toggles
- [ ] `aria-live` sur les messages d'etat
- [ ] `prefers-reduced-motion` respecte

### SEO
- [ ] `robots.txt` correct
- [ ] `sitemap.xml` a jour
- [ ] Pas de page orpheline (non liee depuis la navigation)

## Rapport

A la fin de l'audit, produire un resume avec :
- Nombre de problemes trouves par categorie
- Problemes critiques a corriger en priorite
- Suggestions d'amelioration non bloquantes
