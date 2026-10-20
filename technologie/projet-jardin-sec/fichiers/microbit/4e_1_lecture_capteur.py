# Projet jardin sec - Liceo Franco Hondureno - Technologie 4e, seance 4
# LIRE ET AFFICHER L'HUMIDITE DU SOL
#
# Cablage
#   Capteur capacitif : signal sur P0, alimentation sur 3V, masse sur GND.
#   Verifier le branchement AVANT la mise sous tension : une inversion
#   3V / GND detruit le capteur.
#
# Equivalent MakeCode, en blocs :
#   [toujours]
#     [montrer nombre ( lire la broche analogique P0 )]
#     [pause (2000) ms]

from microbit import *

while True:
    valeur = pin0.read_analog()   # nombre entre 0 et 1023
    display.scroll(valeur)
    sleep(2000)

# A relever pendant l'etalonnage, et a noter sur la fiche :
#   capteur dans l'air ................ environ 750   (sec absolu)
#   capteur dans un verre d'eau ....... environ 350   (mouille absolu)
#   capteur dans la terre seche ....... environ 700
#   capteur dans la terre arrosee ..... environ 400
#
# Conclusion attendue : la valeur DIMINUE quand l'humidite augmente.
