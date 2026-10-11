# encoding: UTF-8
#
# 99 - LE SITE APRES TRAVAUX, MODELE COMPLET
# Projet jardin sec - Liceo Franco Hondureno - Technologie cycle 4
#
# Charge les quatre scripts precedents et construit l'ensemble en une commande :
# le site existant, les huit jardinieres des 5e, le reseau d'eau des 4e et
# l'amenagement des 3e. Sert de reference, de solution de secours si un binome
# perd son fichier, et de support pour la presentation de la seance 6 de 3e.
#
# UTILISATION
#   Placer les cinq fichiers dans le meme dossier, puis dans la console Ruby :
#   load "chemin/99_site_apres.rb"
#   JardinSec::Complet.construire
#
#   JardinSec::Complet.avant_apres   # bascule entre les deux etats
#   JardinSec::Complet.recapitulatif # tous les chiffres du projet

DOSSIER = File.dirname(__FILE__)
%w[_commun 00_site_avant 01_5e_jardiniere 02_4e_reseau 03_3e_amenagement].each do |f|
  chemin = File.join(DOSSIER, f + ".rb")
  load chemin if File.exist?(chemin)
end

module JardinSec
  module Complet

    def self.construire
      JardinSec.titre("Jardin sec : construction du modele complet")
      Avant.construire
      Jardiniere.tout
      Jardiniere.implanter
      Reseau.tout
      Amenagement.tout
      JardinSec.modele.active_view.zoom_extents
      recapitulatif
      puts ""
      puts "Modele complet construit. Deux scenes sont enregistrees : Site avant et Site apres."
      true
    end

    # Masque ou affiche les calques du projet, pour la comparaison avant et apres.
    def self.avant_apres
      projet = ["02 Jardinieres", "03 Reseau eau", "04 Commande et energie", "06 Signaletique"]
      visible = nil
      projet.each do |nom|
        calque = JardinSec.modele.layers[nom]
        next if calque.nil?
        visible = calque.visible? if visible.nil?
        calque.visible = !visible
      end
      puts visible ? "Etat AVANT affiche." : "Etat APRES affiche."
    end

    def self.recapitulatif
      JardinSec.titre("Recapitulatif du projet jardin sec")
      lignes = [
        ["Surface totale de la cour",        "48 m2"],
        ["Surface plantable",                "26,4 m2"],
        ["Surface cultivee, 8 jardinieres",  "7,7 m2"],
        ["Volume de terre par jardiniere",   "220 litres"],
        ["Profondeur de terre",              "0,25 m, contrainte FP1 respectee"],
        ["Hauteur de travail",               "0,32 m, contrainte FC6 respectee"],
        ["Passage libre",                    "1,20 m"],
        ["Surface de captage de la pluie",   "70 m2"],
        ["Recolte annuelle possible",        "50 400 litres"],
        ["Stockage",                         "1 fut de 200 litres, 32 jours d'autonomie"],
        ["Debit du reseau",                  "16 L/h, 8 goutteurs de 2 L/h"],
        ["Duree d'arrosage quotidienne",     "23 minutes au maximum"],
        ["Besoin energetique du systeme",    "1,4 Wh par jour"],
        ["Production du panneau 2 W",        "10 Wh par jour, 7 Wh utiles"],
        ["Autonomie sans soleil",            "7 jours, contrainte FP2 respectee"],
        ["Consommation mesuree",             "2,7 L par jour, soit 0,35 L/m2/jour"],
        ["Economie face a un potager",       "6 444 litres par saison seche, 93 %"],
        ["Eau potable prelevee",             "0 litre"],
        ["Part de materiaux recuperes",      "92 % en masse, contrainte FC5 respectee"],
        ["Cout total du projet",             "21 254 lempiras, environ 745 euros"]
      ]
      lignes.each { |l, v| puts format("%-34s %s", l, v) }
    end
  end
end

puts "Charge. Taper : JardinSec::Complet.construire"
