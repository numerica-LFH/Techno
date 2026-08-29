# Internet

## Ce qu'on cherche

Un message envoyé depuis Tegucigalpa arrive à Paris en une fraction de seconde,
sans qu'aucune machine ne connaisse le trajet complet. Comment ?

## Notions du programme

- Protocole, notion de couche
- Adresse IP, masque de sous-réseau
- Routage, table de routage
- Découpage en paquets, TCP et IP
- Différence entre Internet et le Web

## Séance d'introduction : d'ARPANET au Web

Une séance de 55 minutes, placée avant tout le reste. Elle sert à séparer deux
choses que les élèves confondent presque toujours : le réseau, et le service qui
circule dessus.

### La frise

| Date | Ce qui se passe |
|---|---|
| 1969 | ARPANET relie les ordinateurs de quatre universités américaines. Le 29 octobre, on tente d'envoyer le mot `LOGIN` de Los Angeles à Stanford : le système plante après deux lettres. Le premier message du réseau est donc `LO`. |
| 1974 | Vinton Cerf et Robert Kahn publient les principes de TCP/IP : couper les messages en paquets numérotés, que chaque machine réassemble à l'arrivée. |
| 1982 | En France, le Minitel. Un réseau national qui marche très bien, mais tout passe par un centre et les services sont choisis d'avance. |
| 1<sup>er</sup> janvier 1983 | ARPANET bascule entièrement sur TCP/IP. Des réseaux jusque-là séparés peuvent enfin se parler : c'est le réseau des réseaux. |
| 1989 | Au CERN, à Genève, Tim Berners-Lee propose un système de documents reliés par des liens, pour que les chercheurs cessent de se perdre dans leurs fichiers. |
| 1991 | Première page web publique, `info.cern.ch`. Elle explique ce qu'est le Web. |
| 30 avril 1993 | Le CERN place le Web dans le domaine public. La même année, le navigateur Mosaic affiche les images. |

Le Minitel est le contre-exemple utile de la séance : un réseau peut très bien
fonctionner et rester fermé. On y consulte, on n'y publie pas.

### Internet, le Web, ou ni l'un ni l'autre

Chaque élément est classé dans l'une des trois colonnes. Le test tient en une
question : est-ce que ça sert à **transporter**, ou à **afficher des documents
liés entre eux** ?

| Élément | Réponse |
|---|---|
| Une adresse IP | Internet |
| Une URL | Le Web |
| Un routeur | Internet |
| Une page HTML | Le Web |
| Un lien hypertexte | Le Web |
| Un câble sous-marin | Internet |
| Une clé USB | Ni l'un ni l'autre |
| Un appel vidéo | Internet, sans passer par le Web — sauf s'il se fait dans un navigateur |

La dernière ligne est celle qui fait travailler la classe. C'est là qu'il faut
prendre le temps.

Ce qu'on en retient : Internet est le réseau, le Web est l'un des services qui
circulent dessus. Le premier a une vingtaine d'années de plus que le second.

## Activités

### Activité 1 : tracer une route

*À venir.*

Utilisation de `traceroute` vers plusieurs destinations, lecture des résultats.

### Activité 2 : simuler un réseau

*À venir.*

Construction d'un petit réseau routé dans un simulateur, test de la
connectivité.

### Activité 3 : le paquet perdu

*À venir.*

Que fait TCP quand un paquet n'arrive pas.

## À retenir

"Aucune machine ne connaît le chemin complet. Chaque routeur prend une décision locale, avec sa seule table de routage."

## Pour aller plus loin

- IPv4, IPv6 et la pénurie d'adresses
- Ce qui se serait passé si le CERN avait fait payer une licence sur le Web
