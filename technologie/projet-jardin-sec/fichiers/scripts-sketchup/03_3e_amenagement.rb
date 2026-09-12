# encoding: UTF-8
#
# 03 - L'AMENAGEMENT COMPLET, TRAVAIL DES 3e
# Projet jardin sec - Liceo Franco Hondureno - Technologie cycle 4
#
# Ajoute au modele ce qui reste apres le travail des 5e et des 4e : l'ombriere,
# le panneau solaire et son accumulateur, les jardinieres murales en palette, la
# fresque du mur, le coin des chevalets, la vegetation et les etiquettes de plantes.
#
# UTILISATION
#   load "chemin/_commun.rb"
#   load "chemin/03_3e_amenagement.rb"
#   JardinSec::Amenagement.ombriere
#   JardinSec::Amenagement.solaire
#   JardinSec::Amenagement.palettes_murales
#   JardinSec::Amenagement.fresque
#   JardinSec::Amenagement.coin_chevalets
#   JardinSec::Amenagement.vegetation
#   JardinSec::Amenagement.tout
#   JardinSec::Amenagement.bilan_eau

module JardinSec
  module Amenagement

    PLANTES = [
      ["Romero",        "feuillage",    0.35],
      ["Tomillo",       "feuillage",    0.18],
      ["Oregano",       "feuillage",    0.22],
      ["Sabila",        "haie",         0.30],
      ["Maguey",        "haie",         0.45],
      ["Zacate limon",  "feuillage",    0.55],
      ["Flor de muerto","fleur_orange", 0.28],
      ["Chile testigo", "fleur_rouge",  0.40]
    ]

    def self.jardinieres
      depart_x = 2.00
      pas_x = 1.90
      [0.80, 2.80].flat_map.with_index do |y, r|
        (0..3).map { |c| [depart_x + c * pas_x + 0.60, y + 0.40, r * 4 + c] }
      end
    end

    def self.tout
      JardinSec.titre("Amenagement complet des 3e")
      ombriere
      solaire
      palettes_murales
      fresque
      coin_chevalets
      vegetation
      JardinSec.modele.active_view.zoom_extents
      scene("Site apres")
      bilan_eau
    end

    # Ombriere legere au dessus de la rangee la plus exposee.
    def self.ombriere
      JardinSec.operation("Ombriere") do
        JardinSec.effacer("Amgt_ombriere")
        grp = JardinSec.modele.entities.add_group
        grp.name = "Amgt_ombriere"
        grp.layer = JardinSec.calque("04 Commande et energie")
        e = grp.entities
        [[1.90, 0.75], [1.90, 1.65], [8.40, 0.75], [8.40, 1.65]].each_with_index do |(x, y), i|
          JardinSec.boite(e, x, y, 0, 0.08, 0.08, 2.10, "poteau_#{i + 1}", "bois")
        end
        # Deux pannes et une toile tendue.
        JardinSec.boite(e, 1.90, 0.75, 2.10, 6.58, 0.06, 0.10, "panne_avant", "bois")
        JardinSec.boite(e, 1.90, 1.65, 2.10, 6.58, 0.06, 0.10, "panne_arriere", "bois")
        JardinSec.boite(e, 1.90, 0.75, 2.20, 6.58, 0.98, 0.01, "toile", "haie")
      end
      puts "Ombriere posee sur la rangee sud. Surface ombragee : 6,45 m2."
      puts "Effet attendu, mesure en seance 5 de 5e : evaporation reduite d'environ 40 % sous la toile."
    end

    # Panneau solaire oriente au sud, incline de 15 degres a cette latitude.
    def self.solaire
      JardinSec.operation("Panneau solaire et accumulateur") do
        JardinSec.effacer("Amgt_solaire")
        grp = JardinSec.modele.entities.add_group
        grp.name = "Amgt_solaire"
        grp.layer = JardinSec.calque("04 Commande et energie")
        e = grp.entities
        # Panneau 2 W, environ 165 x 135 mm, monte sur potence en haut du mur.
        pan = JardinSec.boite(e, 0.35, 3.40, 2.30, 0.17, 0.14, 0.01, "panneau", "verre_solaire")
        pivot = Geom::Point3d.new(JardinSec.m(0.35), JardinSec.m(3.40), JardinSec.m(2.30))
        rot = Geom::Transformation.rotation(pivot, Geom::Vector3d.new(1, 0, 0), 15.degrees)
        pan.transform!(rot)
        JardinSec.boite(e, 0.41, 3.44, 1.67, 0.04, 0.04, 0.63, "potence", "metal")
        # Coffret de l'accumulateur et du regulateur, sous le boitier de commande.
        JardinSec.boite(e, 0.30, 3.78, 1.40, 0.12, 0.09, 0.10, "accumulateur", "plastique_noir")
      end
      puts "Panneau 2 W incline a 15 degres, oriente au sud, hors ombre de la haie."
      puts "Verifier l'ombre portee avec l'outil Ombres, le 21 decembre a 12 h."
    end

    # Jardinieres murales en palette, comme sur la photo du jardin realise.
    def self.palettes_murales
      JardinSec.operation("Palettes murales") do
        JardinSec.effacer("Amgt_palettes")
        grp = JardinSec.modele.entities.add_group
        grp.name = "Amgt_palettes"
        grp.layer = JardinSec.calque("02 Jardinieres")
        e = grp.entities
        [2.60, 4.20, 5.80, 7.40].each_with_index do |x, i|
          JardinSec.boite(e, x, 3.72, 1.35, 1.20, 0.14, 0.80, "palette_#{i + 1}", "bois_bleu")
          3.times do |k|
            JardinSec.boite(e, x + 0.03, 3.62, 1.42 + k * 0.26, 1.14, 0.12, 0.10,
                            "bac_#{i + 1}_#{k + 1}", "feuillage")
          end
        end
      end
      puts "Quatre jardinieres murales de 1,20 m, trois bacs chacune, soit 12 bacs suspendus."
      puts "Elles utilisent la surface du mur sans reduire le passage libre de 1,20 m."
    end

    # Fresque de fleurs peinte par les eleves sur le bas du mur.
    def self.fresque
      JardinSec.operation("Fresque du mur") do
        JardinSec.effacer("Amgt_fresque")
        grp = JardinSec.modele.entities.add_group
        grp.name = "Amgt_fresque"
        grp.layer = JardinSec.calque("06 Signaletique")
        e = grp.entities
        couleurs = %w[fleur_jaune fleur_rouge fleur_orange bois_bleu]
        14.times do |i|
          x = 1.00 + i * 0.62
          JardinSec.boite(e, x, 3.88, 0.55, 0.34, 0.01, 0.34, "fleur_#{i + 1}", couleurs[i % 4])
          JardinSec.boite(e, x + 0.16, 3.88, 0.10, 0.02, 0.01, 0.45, "tige_#{i + 1}", "haie")
        end
      end
      puts "Fresque de 14 motifs sur le bas du mur, entre 0,10 m et 0,90 m de hauteur."
    end

    # Coin d'exposition et de dessin, au fond de la cour.
    def self.coin_chevalets
      JardinSec.operation("Coin chevalets") do
        JardinSec.effacer("Amgt_chevalets")
        grp = JardinSec.modele.entities.add_group
        grp.name = "Amgt_chevalets"
        grp.layer = JardinSec.calque("06 Signaletique")
        e = grp.entities
        JardinSec.boite(e, 0.20, 0.90, 0, 1.60, 1.80, 0.04, "dalle", "beton")
        [[0.35, 1.10], [0.95, 1.10], [0.35, 1.95], [0.95, 1.95]].each_with_index do |(x, y), i|
          JardinSec.boite(e, x, y, 0.04, 0.05, 0.05, 1.20, "pied_#{i + 1}", "bois")
          JardinSec.boite(e, x - 0.16, y - 0.02, 0.70, 0.40, 0.02, 0.50, "toile_#{i + 1}", "vitre")
        end
        JardinSec.boite(e, 0.25, 1.30, 0.04, 1.10, 0.45, 0.42, "banc_palette", "bois")
      end
      puts "Coin de quatre chevalets et un banc, sur la dalle du fond, hors zone d'arrosage."
    end

    # Une plante par jardiniere, avec son etiquette.
    def self.vegetation
      JardinSec.operation("Vegetation et etiquettes") do
        JardinSec.effacer("Amgt_vegetation")
        grp = JardinSec.modele.entities.add_group
        grp.name = "Amgt_vegetation"
        grp.layer = JardinSec.calque("05 Vegetation")
        e = grp.entities
        jardinieres.each_with_index do |(x, y, _), i|
          nom, teinte, hauteur = PLANTES[i % PLANTES.length]
          JardinSec.cylindre(e, x - 0.25, y, 0.32, 0.10, hauteur * 0.6, "#{nom}_a", teinte, nil, 10)
          JardinSec.cylindre(e, x, y - 0.12, 0.32, 0.12, hauteur, "#{nom}_b", teinte, nil, 10)
          JardinSec.cylindre(e, x + 0.22, y + 0.10, 0.32, 0.09, hauteur * 0.75, "#{nom}_c", teinte, nil, 10)
          # Etiquette plantee, comme sur la photo du jardin realise.
          JardinSec.boite(e, x - 0.45, y - 0.30, 0.32, 0.02, 0.01, 0.18, "piquet_#{i + 1}", "bois")
          JardinSec.boite(e, x - 0.52, y - 0.31, 0.48, 0.16, 0.01, 0.07, "etiquette_#{i + 1}", "bois_vert")
          JardinSec.etiquette(e, x - 0.52, y - 0.31, 0.56, nom)
        end
      end
      puts "Huit plantes en place : #{PLANTES.map(&:first).join(', ')}."
      puts "Sept sont xerophytes, la huitieme est le temoin a besoin moyen."
    end

    def self.scene(nom)
      pages = JardinSec.modele.pages
      pages.erase(pages[nom]) if pages[nom]
      pages.add(nom)
    rescue StandardError
      nil
    end

    # Le bilan de la seance 5 de 3e, recalcule a partir des donnees du projet.
    def self.bilan_eau
      surface = 7.7          # m2 cultives
      jours = 180
      mesure = 2.7           # L/jour releve sur le systeme
      temoin = 6.0           # L/jour arrosage manuel
      classique = 5.0        # L/m2/jour potager classique
      conso = mesure * jours
      conso_temoin = temoin * jours
      conso_classique = classique * surface * jours
      JardinSec.titre("Bilan d'eau du jardin, saison seche de 180 jours")
      puts "Surface cultivee                : #{surface} m2"
      puts "Consommation mesuree            : #{format('%.0f', conso)} litres"
      puts "Arrosage manuel des temoins     : #{format('%.0f', conso_temoin)} litres"
      puts "Potager classique de reference  : #{format('%.0f', conso_classique)} litres"
      puts "Economie face au potager        : #{format('%.0f', conso_classique - conso)} litres, soit #{format('%.0f', 100 * (1 - conso / conso_classique))} %"
      puts "Consommation par m2 et par jour : #{format('%.2f', conso / (surface * jours))} litre"
      puts "Contrainte FC1, moins de 1 L/m2/jour : #{conso / (surface * jours) < 1 ? 'RESPECTEE' : 'NON RESPECTEE'}"
      puts "Eau potable prelevee sur le reseau : 0 litre, toute l'eau vient de la pluie."
    end
  end
end

puts "Charge. Taper : JardinSec::Amenagement.tout"
