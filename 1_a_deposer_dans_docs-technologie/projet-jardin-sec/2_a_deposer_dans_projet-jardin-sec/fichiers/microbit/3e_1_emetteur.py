# Projet jardin sec - Liceo Franco Hondureno - Technologie 3e, seance 4
# EMETTEUR : une carte par jardiniere
#
# Ce programme reprend celui des 4e et lui ajoute les trois ameliorations
# decidees en seance 3 :
#   1. le filtre des valeurs aberrantes,
#   2. l'hysteresis a deux seuils, qui supprime les arrosages en doublon,
#   3. l'envoi radio de la mesure vers le poste recepteur.
#
# Cablage : capteur sur P0, relais sur P1, comme en 4e.
# AVANT DE TELEVERSER : donner a chaque carte un ID different, de 1 a 8.

from microbit import *
import radio

# --- Identite de la carte ---
ID = 3                     # numero de la jardiniere, A CHANGER sur chaque carte

# --- Etalonnage propre a ce capteur ---
SEC = 750
MOUILLE = 350

# --- Hysteresis : deux seuils au lieu d'un seul ---
SEUIL_BAS = 28             # on demarre l'arrosage en dessous
SEUIL_HAUT = 45            # on l'arrete au dessus

# --- Reglages ---
ATTENTE = 1800000          # 30 minutes
MINI_PLAUSIBLE = 300
MAXI_PLAUSIBLE = 800
GROUPE_RADIO = 7

radio.on()
radio.config(group=GROUPE_RADIO, power=6)
pin1.write_digital(0)

arrosage = False           # memoire de l'etat, indispensable a l'hysteresis

sleep(ID * 5000)           # decalage des emissions, pour eviter les collisions

while True:
    v = pin0.read_analog()

    if v < MINI_PLAUSIBLE or v > MAXI_PLAUSIBLE:
        radio.send(str(ID) + ";err;" + str(v))
        display.show(Image.NO)
        sleep(ATTENTE)
        continue

    h = 100 * (SEC - v) // (SEC - MOUILLE)

    if h < SEUIL_BAS and not arrosage:
        pin1.write_digital(1)
        arrosage = True
        display.show(Image.ARROW_S)
    elif h > SEUIL_HAUT and arrosage:
        pin1.write_digital(0)
        arrosage = False
        display.clear()

    # Trame envoyee : identifiant ; humidite ; etat d'arrosage
    radio.send(str(ID) + ";" + str(h) + ";" + str(int(arrosage)))

    sleep(ATTENTE)
