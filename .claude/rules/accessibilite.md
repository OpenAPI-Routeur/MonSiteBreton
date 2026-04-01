# Regles d'accessibilite

## Niveau vise

WCAG 2.1 niveau AA minimum sur l'ensemble du site.

## Navigation

- **Skip link** : chaque page doit commencer par `<a class="skip-link" href="#contenu">Aller au contenu</a>`
- **Landmarks** : utiliser `<header>`, `<main>`, `<footer>`, `<nav>` avec `aria-label` quand il y a plusieurs navigations
- **Focus visible** : toutes les interactions clavier doivent montrer un indicateur de focus (classe `focus-ring`)
- **Navigation clavier** : le menu mobile doit se fermer avec Escape et rendre le focus au bouton toggle
- **Ordre de tabulation** : logique et sequentiel, pas de `tabindex` positif

## Images

- Toujours un attribut `alt` sur chaque `<img>`
- `alt` descriptif pour les images porteuses de sens
- `alt=""` pour les images purement decoratives
- `aria-hidden="true"` sur les elements decoratifs non-img (blobs, overlays)

## Formulaires

- Chaque champ doit avoir un `<label>` associe (via imbrication ou `for`/`id`)
- Messages d'etat via `role="status"` et `aria-live="polite"`
- Attributs `autocomplete` sur les champs standard (name, email, organization)
- Attribut `required` sur les champs obligatoires
- Feedback visuel et textuel sur les erreurs (pas uniquement de la couleur)

## Contenu dynamique

- Boutons toggle : `aria-expanded` synchronise avec l'etat visuel
- Accordeons (FAQ) : utiliser `<details>/<summary>` natif
- Animations : respecter `prefers-reduced-motion` — desactiver les animations si l'utilisateur le demande

## Contraste et lisibilite

- Ratio de contraste minimum 4.5:1 pour le texte normal
- Ratio de contraste minimum 3:1 pour le texte large (>18px bold ou >24px)
- Ne jamais utiliser la couleur seule pour transmettre une information
- Taille de texte minimum : 14px pour le corps de texte

## Tests a effectuer

- Navigation complete au clavier (Tab, Shift+Tab, Enter, Escape)
- Verification du contraste avec un outil (Lighthouse, axe)
- Zoom a 200% sans perte de contenu ou de fonctionnalite
- Lecture avec un lecteur d'ecran (VoiceOver, NVDA)
