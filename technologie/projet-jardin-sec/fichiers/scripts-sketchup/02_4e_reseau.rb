# encoding: UTF-8
#
# 02 - LA RECUPERATION D'EAU ET LE RESEAU GOUTTE A GOUTTE, TRAVAIL DES 4e
# Projet jardin sec - Liceo Franco Hondureno - Technologie cycle 4
#
# Construit la gouttiere, le fut de 200 litres sur son support surelevee, la ligne
# principale, les huit antennes, les goutteurs, les capteurs d'humidite et le
# boitier de commande fixe au mur.
#
# UTILISATION
#   load "chemin/_commun.rb"
#   load "chemin/00_site_avant.rb"   ; JardinSec::Avant.construire
#   load "chemin/01_5e_jardiniere.rb"; JardinSec::Jardiniere.tout ; JardinSec::Jardiniere.implanter
#   load "chemin/02_4e_reseau.rb"
#   JardinSec::Reseau.gouttiere
#   JardinSec::Reseau.fut
#   JardinSec::Reseau.ligne_principale
#   JardinSec::Reseau.antennes
#   JardinSec::Reseau.commande
#   JardinSec::Reseau.tout           # les cinq d'un coup
#   JardinSec::Reseau.dimensionnement

module JardinSec
  module Reseau

    # Fut de 200 litres utiles : diametre 0,58 m, hauteur 0,90 m.
    RAYON_FUT   = 0.29
    HAUT_FUT    = 0.90
    H_SUPPORT   = 0.80    # surelevation, cree la charge hydraulique
    X_FUT       = 0.80
    Y_FUT       = 3.20

    Y_LIGNE     = 2.20    # axe de la ligne principale, au milieu du passage
    Z_LIGNE     = 0.03
    RAYON_TUYAU = 0.008   # tuyau de 16 mm de diametre

    # Position des huit jardinieres, reprise du script des 5e.
    def self.jardinieres
      depart_x = 2.00
      pas_x = 1.90
      [0.80, 2.80].flat_map.with_index do |y, r|
        (0..3).map { |c| [depart_x + c * pas_x + 0.60, y + 0.40, r] }
      end
    end

    def self.tout
      JardinSec.titre("Reseau d'eau des 4e")
      gouttiere
      fut
      ligne_principale
      antennes
      commande
      JardinSec.modele.active_view.zoom_extents
      dimensionnement
    end

    def self.gouttiere
      JardinSec.operation("Gouttiere et descente") do
        JardinSec.effacer("Reseau_gouttiere")
        grp = JardinSec.modele.entities.add_group
        grp.name = "Reseau_gouttiere"
        grp.layer = JardinSec.calque("03 Reseau eau")
        e = grp.entities
        # Chemin horizontal le long du batiment, sous la dalle en saillie.
        JardinSec.tube(e, 0, 3.55, 3.42, 12.0, 0.06, :x, "gouttiere", "metal")
        # Descente verticale jusqu'au dessus du fut.
        JardinSec.cylindre(e, X_FUT, 3.55, H_SUPPORT + HAUT_FUT, 0.05,
                           3.42 - H_SUPPORT - HAUT_FUT, "descente", "metal", nil, 12)
        # Coude d'arrivee au dessus du fut.
        JardinSec.tube(e, X_FUT, 3.55, H_SUPPORT + HAUT_FUT - 0.05, 0.35, 0.05, :y,
                       "coude", "metal")
      end
      puts "Gouttiere posee. Surface de captage retenue : 14 x 5 = 70 m2."
    end

    def self.fut
      JardinSec.operation("Fut de 200 litres sur support") do
        JardinSec.effacer("Reseau_fut")
        grp = JardinSec.modele.entities.add_group
        grp.name = "Reseau_fut"
        grp.layer = JardinSec.calque("03 Reseau eau")
        e = grp.entities
        # Support macon, doit tenir 250 kg.
        JardinSec.boite(e, X_FUT - 0.35, Y_FUT - 0.35, 0, 0.70, 0.70, H_SUPPORT,
                        "support", "beton")
        # Le fut lui-meme.
        JardinSec.cylindre(e, X_FUT, Y_FUT, H_SUPPORT, RAYON_FUT, HAUT_FUT,
                           "fut", "eau", nil, 32)
        # Couvercle, indispensable contre les moustiques.
        JardinSec.cylindre(e, X_FUT, Y_FUT, H_SUPPORT + HAUT_FUT, RAYON_FUT + 0.01, 0.04,
                           "couvercle", "plastique_noir", nil, 32)
        # Robinet de puisage et depart vers la ligne principale.
        JardinSec.tube(e, X_FUT, Y_FUT - RAYON_FUT, H_SUPPORT + 0.10, 0.20, 0.012, :y,
                       "robinet", "metal")
      end
      volume = Math::PI * RAYON_FUT**2 * HAUT_FUT
      puts "Fut construit. Volume geometrique #{format('%.3f', volume)} m3, soit #{format('%.0f', volume * 1000)} litres."
      puts "Volume utile annonce par le fabricant : 200 litres. Charge hydraulique disponible : #{H_SUPPORT} m."
    end

    def self.ligne_principale
      JardinSec.operation("Ligne principale") do
        JardinSec.effacer("Reseau_ligne")
        grp = JardinSec.modele.entities.add_group
        grp.name = "Reseau_ligne"
        grp.layer = JardinSec.calque("03 Reseau eau")
        e = grp.entities
        # Depart du fut vers l'axe du couloir.
        JardinSec.tube(e, X_FUT, Y_LIGNE, Z_LIGNE, Y_FUT - Y_LIGNE, RAYON_TUYAU, :y,
                       "descente_ligne", "plastique_noir")
        # Ligne principale sur toute la longueur cultivee.
        JardinSec.tube(e, X_FUT, Y_LIGNE, Z_LIGNE, 8.60, RAYON_TUYAU, :x,
                       "ligne", "plastique_noir")
        # Electrovanne en tete de ligne, commandee par le micro:bit.
        JardinSec.boite(e, X_FUT + 0.20, Y_LIGNE - 0.04, Z_LIGNE, 0.10, 0.08, 0.09,
                        "electrovanne", "metal")
      end
      puts "Ligne principale posee : 8,60 m plus 1,00 m de liaison, soit environ 9,60 m de tuyau."
    end

    def self.antennes
      JardinSec.operation("Antennes, goutteurs et capteurs") do
        JardinSec.effacer("Reseau_antennes")
        grp = JardinSec.modele.entities.add_group
        grp.name = "Reseau_antennes"
        grp.layer = JardinSec.calque("03 Reseau eau")
        e = grp.entities
        longueur_totale = 0.0
        jardinieres.each_with_index do |(x, y, rangee), i|
          depart = Y_LIGNE
          longueur = (y - depart).abs
          y0 = [depart, y].min
          JardinSec.tube(e, x, y0, Z_LIGNE, longueur, RAYON_TUYAU, :y, "antenne_#{i + 1}", "plastique_noir")
          longueur_totale += longueur
          # Goutteur pose sur le paillage, au pied de la plante.
          JardinSec.cylindre(e, x, y, 0.32, 0.012, 0.03, "goutteur_#{i + 1}", "plastique_noir", nil, 8)
          # Capteur d'humidite enfonce a 12 cm, a l'ecart du goutteur.
          JardinSec.boite(e, x + 0.18, y - 0.01, 0.10, 0.02, 0.02, 0.22,
                          "capteur_#{i + 1}", "verre_solaire")
        end
        puts "Longueur totale des antennes : #{format('%.2f', longueur_totale)} m."
      end
      puts "Huit goutteurs de 2 L/h, debit total 16 L/h. Huit capteurs d'humidite a 12 cm de profondeur."
    end

    def self.commande
      JardinSec.operation("Boitier de commande") do
        JardinSec.effacer("Reseau_commande")
        grp = JardinSec.modele.entities.add_group
        grp.name = "Reseau_commande"
        grp.layer = JardinSec.calque("04 Commande et energie")
        e = grp.entities
        # Boitier etanche IP65 fixe au mur, hors d'atteinte.
        JardinSec.boite(e, 0.30, 3.78, 1.60, 0.15, 0.11, 0.07, "boitier", "plastique_noir")
        # Support de piles, provisoire avant le solaire des 3e.
        JardinSec.boite(e, 0.50, 3.80, 1.60, 0.07, 0.06, 0.03, "piles", "metal")
      end
      puts "Boitier IP65 pose a 1,60 m. Tension du circuit : 6 V au maximum, contrainte FC7 respectee."
    end

    # Les calculs de la seance 2 de 4e, affiches pour verification en classe.
    def self.dimensionnement
      surface_toit = 14.0 * 5.0
      pluie = 900.0            # mm par an
      coef = 0.8
      besoin_jour = 6.2        # litres
      recolte = surface_toit * pluie * coef
      JardinSec.titre("Dimensionnement du reseau, verification des calculs de la seance 2")
      puts "Surface de captage        : #{format('%.0f', surface_toit)} m2"
      puts "Pluviometrie annuelle     : #{format('%.0f', pluie)} mm"
      puts "Coefficient de recuperation : #{coef}"
      puts "Recolte annuelle          : #{format('%.0f', recolte)} litres, soit #{format('%.1f', recolte / 1000)} m3"
      puts "Une pluie de 10 mm apporte : #{format('%.0f', surface_toit * 10 * coef)} litres, le fut est plein"
      puts "Besoin quotidien du jardin : #{besoin_jour} litres"
      puts "Autonomie d'un fut de 200 L : #{format('%.0f', 200 / besoin_jour)} jours"
      puts "Futs pour 180 jours sans pluie : #{(180 * besoin_jour / 200).ceil}"
      puts "Duree d'arrosage quotidienne : #{format('%.0f', besoin_jour / 16.0 * 60)} minutes a 16 L/h"
    end
  end
end

puts "Charge. Taper : JardinSec::Reseau.tout"
