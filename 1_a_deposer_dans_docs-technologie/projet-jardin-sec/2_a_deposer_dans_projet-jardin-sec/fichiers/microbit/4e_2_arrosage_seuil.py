# Projet jardin sec - Liceo Franco Hondureno - Technologie 4e, seance 5
# ARROSER SEULEMENT QUAND LA TERRE EST SECHE
#
# Cablage
#   Capteur capacitif : P0, 3V, GND.
#   Module relais     : P1, 3V, GND. Le circuit de l'electrovanne est separe,
#                       alimente en 6 V, et ne touche jamais le micro:bit.
#
# Equivalent MakeCode, en blocs :
#   [au demarrage]  ecrire la broche numerique P1 a (0)
#   [toujours]      definir valeur a (lire broche analogique P0)
#                   definir h a (100 x (SEC - valeur) / (SEC - MOUILLE))
#                   [si] (valeur < 300) ou (valeur > 800) [alors] montrer icone Non
#                   [sinon si] (h < SEUIL) [alors] ecrire P1 a 1, pause 90000,
#                              ecrire P1 a 0
#                   pause (1800000)

from microbit import *

# --- Constantes d'etalonnage, a remplacer par les valeurs relevees en seance 4 ---
SEC = 750          # valeur brute dans l'air
MOUILLE = 350      # valeur brute dans l'eau
SEUIL = 30         # pourcentage d'humidite en dessous duquel on arrose

# --- Reglages d'arrosage ---
DUREE_ARROSAGE = 90000     # 90 secondes, soit environ 400 mL sur 8 goutteurs
ATTENTE = 1800000          # 30 minutes entre deux mesures

# --- Securite : plage de valeurs plausibles pour un capteur en bon etat ---
MINI_PLAUSIBLE = 300
MAXI_PLAUSIBLE = 800

pin1.write_digital(0)      # vanne fermee au demarrage, y compris apres coupure


def humidite(valeur):
    """Convertit la valeur brute du capteur en pourcentage d'humidite."""
    return 100 * (SEC - valeur) // (SEC - MOUILLE)


while True:
    v = pin0.read_analog()

    if v < MINI_PLAUSIBLE or v > MAXI_PLAUSIBLE:
        # Capteur debranche, casse ou noye : on n'arrose pas et on le signale.
        display.show(Image.NO)
        sleep(ATTENTE)
        continue

    h = humidite(v)
    display.scroll(h)

    if h < SEUIL:
        display.show(Image.ARROW_S)
        pin1.write_digital(1)          # ouverture de l'electrovanne
        sleep(DUREE_ARROSAGE)
        pin1.write_digital(0)          # fermeture
        display.clear()

    sleep(ATTENTE)

# Pour l'essai en classe, remplacer ATTENTE par 10000 (10 secondes) et
# DUREE_ARROSAGE par 3000 (3 secondes). PENSER A REMETTRE les vraies valeurs
# avant l'installation dehors, sinon le fut se vide en une journee.
