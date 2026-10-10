# encoding: UTF-8
#
# 00 - LE SITE AVANT TRAVAUX
# Projet jardin sec - Liceo Franco Hondureno - Technologie cycle 4
#
# Reproduit le couloir gravillonne tel qu'il est aujourd'hui : le sol, le mur du
# batiment avec ses fenetres et ses grilles, la dalle en saillie, le mur de
# soutenement du fond, le batiment en brique de l'etage, la haie et le jeune pin.
#
# A PROJETER en fin de seance 2 de 5e, apres que les eleves ont construit
# eux-memes le sol et les deux murs.
#
# UTILISATION dans la console Ruby de SketchUp :
#   load "chemin/_commun.rb"
#   load "chemin/00_site_avant.rb"
#   JardinSec::Avant.construire
#
# REPERE : X = longueur du couloir, de 0 au fond a 12 vers l'ouverture.
#          Y = largeur, 0 du cote de la haie, 4 du cote du batiment.
#          Z = hauteur, 0 au niveau du gravier.

module JardinSec
  module Avant

    LONGUEUR = 12.0   # m
    LARGEUR  = 4.0    # m
    H_MUR    = 3.20   # m, hauteur du mur du batiment
    H_SOUT   = 1.30   # m, hauteur du mur de soutenement

    # Fenetres : [position en X, largeur, hauteur, hauteur d'allege]
    FENETRES = [[1.5, 1.6, 1.10, 1.00],
                [4.0, 1.6, 1.10, 1.00],
                [6.5, 1.6, 1.10, 1.00],
                [9.0, 1.6, 1.10, 1.00]]

    def self.construire
      JardinSec.titre("Site avant travaux : construction du modele")
      JardinSec.operation("Jardin sec - site avant") do
        ents = JardinSec.modele.entities
        %w[Avant_sol Avant_batiment Avant_soutenement Avant_etage Avant_haie Avant_pin].each do |n|
          JardinSec.effacer(n)
        end
        sol(ents)
        batiment(ents)
        soutenement(ents)
        etage(ents)
        haie(ents)
        pin(ents)
      end
      JardinSec.modele.active_view.zoom_extents
      recapitulatif
      ajouter_scene("Site avant")
      true
    end

    def self.sol(ents)
      JardinSec.boite(ents, 0, 0, -0.05, LONGUEUR, LARGEUR, 0.05,
                      "Avant_sol", "sol_gravier", "01 Site")
    end

    def self.batiment(ents)
      grp = ents.add_group
      grp.name = "Avant_batiment"
      grp.layer = JardinSec.calque("01 Site")
      e = grp.entities

      # Le mur porteur, epaisseur 0,25 m, cote Y = 4.
      JardinSec.boite(e, 0, 3.90, 0, LONGUEUR, 0.25, H_MUR, "mur", "beton")

      # La dalle en saillie qui coiffe le mur, visible sur la photo.
      JardinSec.boite(e, 0, 3.35, H_MUR, LONGUEUR, 0.80, 0.28, "dalle", "beton")

      # Les fenetres, representees par une vitre encastree et ses barreaux.
      FENETRES.each_with_index do |(x, larg, haut, allege), i|
        JardinSec.boite(e, x, 3.86, allege, larg, 0.06, haut, "vitre_#{i + 1}", "vitre")
        barreaux(e, x, larg, haut, allege, i)
      end

      # La porte de service, a l'extremite du couloir.
      JardinSec.boite(e, 10.90, 3.86, 0, 0.90, 0.06, 2.05, "porte", "vitre")
    end

    # Un barreau vertical tous les 12 cm, comme sur la photo.
    def self.barreaux(parent, x, larg, haut, allege, index)
      pas = 0.12
      nb = (larg / pas).floor
      (1...nb).each do |k|
        JardinSec.boite(parent, x + k * pas, 3.82, allege, 0.02, 0.04, haut,
                        "barreau_#{index + 1}_#{k}", "plastique_noir")
      end
    end

    def self.soutenement(ents)
      grp = ents.add_group
      grp.name = "Avant_soutenement"
      grp.layer = JardinSec.calque("01 Site")
      e = grp.entities
      # Mur transversal au fond de la cour.
      JardinSec.boite(e, -0.30, 0, 0, 0.30, LARGEUR, H_SOUT, "mur_fond", "beton")
      # Retour du mur le long de la haie, en pente vers l'exterieur.
      JardinSec.boite(e, -0.30, -0.30, 0, 3.50, 0.30, H_SOUT, "mur_retour", "beton")
    end

    def self.etage(ents)
      grp = ents.add_group
      grp.name = "Avant_etage"
      grp.layer = JardinSec.calque("01 Site")
      e = grp.entities
      # Le volume en brique visible derriere le mur de soutenement.
      JardinSec.boite(e, -3.20, 1.20, H_SOUT, 3.20, 2.90, 3.10, "brique", "brique")
      # Le bandeau beton et la fenetre de l'etage du batiment principal.
      JardinSec.boite(e, 0, 3.90, H_MUR + 0.28, LONGUEUR, 0.25, 2.40, "mur_etage", "beton")
      JardinSec.boite(e, 1.20, 3.86, H_MUR + 0.90, 2.20, 0.06, 1.20, "vitre_etage", "vitre")
    end

    def self.haie(ents)
      grp = ents.add_group
      grp.name = "Avant_haie"
      grp.layer = JardinSec.calque("05 Vegetation")
      JardinSec.boite(grp.entities, 0, -0.10, 0, LONGUEUR, 0.70, 1.50, "haie", "haie")
    end

    # Le jeune pin isole au milieu du gravier, represente par trois etages.
    def self.pin(ents)
      grp = ents.add_group
      grp.name = "Avant_pin"
      grp.layer = JardinSec.calque("05 Vegetation")
      e = grp.entities
      x, y = 6.20, 1.80
      JardinSec.cylindre(e, x, y, 0, 0.02, 0.18, "tronc", "bois", nil, 8)
      JardinSec.cylindre(e, x, y, 0.18, 0.22, 0.16, "etage_1", "feuillage", nil, 10)
      JardinSec.cylindre(e, x, y, 0.34, 0.15, 0.14, "etage_2", "feuillage", nil, 10)
      JardinSec.cylindre(e, x, y, 0.48, 0.08, 0.12, "etage_3", "feuillage", nil, 10)
    end

    def self.ajouter_scene(nom)
      pages = JardinSec.modele.pages
      pages.erase(pages[nom]) if pages[nom]
      pages.add(nom)
    rescue StandardError
      nil
    end

    def self.recapitulatif
      surface = LONGUEUR * LARGEUR
      haie_s  = LONGUEUR * 0.70
      passage = LONGUEUR * 1.20
      puts "Longueur du couloir      : #{format('%.2f', LONGUEUR)} m"
      puts "Largeur du couloir       : #{format('%.2f', LARGEUR)} m"
      puts "Surface totale           : #{format('%.2f', surface)} m2"
      puts "Emprise de la haie       : #{format('%.2f', haie_s)} m2"
      puts "Passage a laisser libre  : #{format('%.2f', passage)} m2"
      puts "Surface plantable        : #{format('%.2f', surface - haie_s - passage)} m2"
      puts ""
      puts "Verification attendue en seance 1 de 5e : 48 m2 au total, 26,4 m2 plantables."
    end
  end
end

puts "Charge. Taper : JardinSec::Avant.construire"
