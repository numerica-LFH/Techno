# Projet jardin sec - Liceo Franco Hondureno - Technologie 3e, seance 4
# RECEPTEUR : une seule carte, posee sur le poste du professeur
#
# Recoit les trames des huit jardinieres, affiche celle qui est selectionnee
# par le bouton A, et enregistre toutes les mesures dans le journal de bord
# de la carte. Le bouton B affiche le dernier releve de toutes les jardinieres,
# l'une apres l'autre.
#
# Le fichier de donnees se recupere en branchant la carte en USB : ouvrir
# MY_DATA.HTM, puis exporter en CSV pour le classeur bilan-eau.

from microbit import *
import radio
import log

GROUPE_RADIO = 7
NB_JARDINIERES = 8

radio.on()
radio.config(group=GROUPE_RADIO)

log.set_labels("jardiniere", "humidite", "arrosage", timestamp=log.SECONDS)

choix = 1
dernieres = {}             # derniere humidite connue, par jardiniere

while True:
    if button_a.was_pressed():
        choix = choix % NB_JARDINIERES + 1
        display.show(str(choix))
        sleep(700)

    if button_b.was_pressed():
        for i in range(1, NB_JARDINIERES + 1):
            display.scroll(str(i) + ":" + str(dernieres.get(i, "-")))

    message = radio.receive()
    if message:
        parties = message.split(";")
        if len(parties) == 3:
            numero = int(parties[0])
            if parties[1] == "err":
                display.show(Image.NO)
                log.add({"jardiniere": numero, "humidite": -1, "arrosage": 0})
            else:
                h = int(parties[1])
                etat = int(parties[2])
                dernieres[numero] = h
                log.add({"jardiniere": numero, "humidite": h, "arrosage": etat})
                if numero == choix:
                    display.scroll(h)

    sleep(200)
