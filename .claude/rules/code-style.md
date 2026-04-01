# Regles de style de code

## HTML

- Indentation : 2 espaces, pas de tabulations
- Attributs sur plusieurs lignes quand il y en a plus de 3
- Toujours fermer les balises (pas de self-closing pour les elements void en HTML5 : `<img>` pas `<img />`)
- Utiliser les entites HTML pour les caracteres speciaux dans le contenu visible (`&eacute;` pour e accent aigu)
- Ordre des attributs : `class`, `id`, `name`, `data-*`, `src/href`, `alt/title`, `type`, `aria-*`, `role`
- Pas de styles inline sauf cas exceptionnel (honeypot `display:none`)

## CSS

- Un fichier CSS par contexte : `index.css` pour l'accueil, `site-pages.css` pour les pages secondaires
- Variables CSS declarees dans `:root` pour les couleurs, espacements et typographies
- Classes utilitaires inspirees de Tailwind mais ecrites a la main (pas de Tailwind CLI)
- Pas de `!important` sauf pour les styles d'accessibilite (`.sr-only`, `.skip-link`)
- Media queries en mobile-first
- Regrouper les proprietes par categorie : positionnement, dimensions, typographie, couleurs, effets

## JavaScript

- Vanilla JS uniquement — pas de jQuery, pas de framework
- IIFE ou module pattern pour eviter la pollution du scope global
- `const` par defaut, `let` quand necessaire, jamais `var`
- Noms de fonctions en camelCase
- Selecteurs via `data-*` attributs plutot que classes CSS quand c'est pour du comportement JS
- Gestion d'erreurs avec try/catch pour les operations asynchrones (fetch, clipboard)
- Toujours verifier l'existence d'un element avant de lui attacher un listener

## Formatage general

- Pas de lignes vides multiples (maximum 1 ligne vide entre les blocs)
- Commentaires en francais ou anglais, coherents dans un meme fichier
- Pas de code commente laisse en production
- Pas de `console.log` en production
