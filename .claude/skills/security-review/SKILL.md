---
name: security-review
description: Revue de securite du site Studio B0ucher
---

# Skill : Revue de securite

## Quand utiliser

Utiliser ce skill avant chaque mise en ligne, ou quand l'utilisateur demande une verification de securite.

## Contexte

Le site est statique (pas de backend, pas de base de donnees), mais certains points de securite restent importants.

## Checklist de securite

### Formulaire
- [ ] Le honeypot `_honey` est present et masque (`display:none`)
- [ ] Le captcha FormSubmit est configure (`_captcha`)
- [ ] La validation cote client est presente (`required`, `type="email"`)
- [ ] Pas d'information sensible dans les champs hidden
- [ ] Le `action` HTML pointe vers l'endpoint standard FormSubmit
- [ ] Le `data-ajax-action` pointe vers l'endpoint AJAX FormSubmit
- [ ] Le fallback mailto ne divulgue pas d'information supplementaire

### Liens externes
- [ ] Tous les liens externes ont `rel="noopener noreferrer"` (ou `rel="noreferrer"` qui inclut noopener)
- [ ] Pas de lien vers des ressources HTTP (tout en HTTPS)
- [ ] Les liens `target="_blank"` ont bien le `rel` de securite

### Donnees exposees
- [ ] L'adresse e-mail exposee est bien l'adresse professionnelle, pas une adresse personnelle
- [ ] Pas de cle API, token ou secret dans le code source
- [ ] Pas de commentaire HTML contenant des informations sensibles
- [ ] Le `.git/` n'est pas accessible publiquement (GitHub Pages le protege par defaut)

### En-tetes et configuration
- [ ] `robots.txt` ne bloque pas de page par erreur
- [ ] La page 404 est en `noindex`
- [ ] Pas de redirection ouverte
- [ ] Le `site.webmanifest` ne contient pas d'information sensible

### Dependances externes
- [ ] Seule dependance externe : FormSubmit pour le formulaire
- [ ] Pas de script tiers charge (analytics, tracking, chat)
- [ ] Polices servies localement (pas de CDN tiers)

## Rapport

Produire un resume avec :
- Niveau de risque global (faible/moyen/eleve)
- Problemes trouves avec niveau de criticite
- Recommandations
