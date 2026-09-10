# Séance 1 — Décoder une trame NMEA

!!! info "Séquence 4 · séance 1 sur 3 · 55 minutes"

    Champs d'une trame, conversion d'une latitude, heure UTC, somme de contrôle.

## Ce qu'on a cherché

Une trame relevée à Tegucigalpa, et rien d'autre. On identifie chaque champ, on convertit, on
vérifie le point sur un fond de carte.

## Trace écrite

### La trame de l'activité

```
$GPGGA,141236.00,1406.2280,N,08712.7360,W,1,08,1.02,990.4,M,-8.7,M,,*55
```

| Champ | Valeur | Ce qu'il désigne |
|---|---|---|
| `141236.00` | 14 h 12 min 36 s | Heure UTC |
| `1406.2280,N` | 14° 06,228' Nord | Latitude et hémisphère |
| `08712.7360,W` | 087° 12,736' Ouest | Longitude et sens |
| `08` | 8 | Nombre de satellites utilisés |
| `990.4,M` | 990,4 m | Altitude, en mètres |
| `*55` | 55 | Somme de contrôle |

### Les conversions

Une latitude s'écrit `ddmm.mmmm` : les deux premiers chiffres sont des degrés, le reste des minutes
d'angle, à diviser par soixante.

```
latitude   : 14 + 6,228 / 60      = 14,1038 °N
longitude  : 87 + 12,736 / 60     = 87,21227 °, et W impose le signe : -87,21227 °
heure locale : 14 h 12 min 36 s UTC - 6 h = 8 h 12 min 36 s
```

### Ce que je retiens

Une trame NMEA est du texte séparé par des virgules, dans un ordre convenu à l'avance. C'est un CSV
d'une seule ligne.

Deux erreurs sont à éviter. Lire « 1406,2280 degrés » est impossible : aucune latitude ne dépasse
90. Oublier le signe négatif de la longitude ouest fait tomber le point en Inde. Vérifier sur un
fond de carte les corrige immédiatement.

Les deux caractères qui suivent l'astérisque forment une **somme de contrôle**. Ils permettent de
vérifier que la trame n'a pas été abîmée pendant la transmission : si le compte ne tombe pas juste,
la trame est rejetée.

La trame ne contient ni nom, ni identifiant de propriétaire. Elle ne dit que la position, l'heure et
la qualité du point.

### Ce que je dois savoir refaire

- Identifier les champs d'une trame donnée.
- Convertir une latitude ou une longitude en degrés décimaux.
- Passer de l'heure UTC à l'heure locale du Honduras.
- Dire à quoi sert la somme de contrôle.

## La question de la séance suivante

La position est calculée. Mais la carte, elle, vient d'ailleurs. Qui la dessine, et comment un
appareil choisit-il un itinéraire ?

## S'évaluer

[Ouvrir l'évaluation de la séquence :material-arrow-right:](evaluation.html){ .md-button .md-button--primary target=_blank }

Quarante questions reprenant les exercices des trois séances et les définitions des fiches.
J'indique mon nom, mon prénom et ma classe : la note s'affiche à la fin et elle est envoyée au
professeur.
