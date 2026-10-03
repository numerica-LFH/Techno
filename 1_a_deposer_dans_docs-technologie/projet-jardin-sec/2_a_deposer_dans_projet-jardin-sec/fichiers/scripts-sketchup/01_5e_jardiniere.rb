# encoding: UTF-8
#
# 01 - LA JARDINIERE DES 5e, CONSTRUITE ETAPE PAR ETAPE
# Projet jardin sec - Liceo Franco Hondureno - Technologie cycle 4
#
# Ce script suit exactement les six etapes de l'activite 1 de la seance 4 de 5e.
# Chaque etape s'appelle separement dans la console Ruby, ce qui permet de projeter
# le geste attendu a la vitesse de la classe, sans avancer plus vite que les eleves.
#
# UTILISATION
#   load "chemin/_commun.rb"
#   load "chemin/01_5e_jardiniere.rb"
#   JardinSec::Jardiniere.etape1     # le fond
#   JardinSec::Jardiniere.etape2     # l'epaisseur du fond
#   JardinSec::Jardiniere.etape3     # la premiere paroi longue
#   JardinSec::Jardiniere.etape4     # la paroi longue opposee
#   JardinSec::Jardiniere.etape5     # les deux parois courtes
#   JardinSec::Jardiniere.etape6     # les quatre montants d'angle
#   JardinSec::Jardiniere.nomenclature
#   JardinSec::Jardiniere.implanter  # les huit jardinieres dans la cour
#
#   JardinSec::Jardiniere.tout       # les six etapes d'un coup
#   JardinSec::Jardiniere.reprendre  # efface et recommence a zero

module JardinSec
  module Jardiniere

    LONGUEUR   = 1.20   # m, cote du cahier des charges
    LARGEUR    = 0.80   # m
    HAUTEUR    = 0.30   # m, hauteur des parois
    EPAISSEUR  = 0.02   # m, epaisseur d'une planche de palette
    MONTANT    = 0.06   # m, section carree des montants d'angle
    TERRE      = 0.25   # m, profondeur de terre imposee par FP1
    PAILLAGE   = 0.03   # m, epaisseur minimale imposee par le cahier des charges

    @groupe = nil

    def self.groupe
      if @groupe.nil? || @groupe.deleted?
        JardinSec.effacer("Jardiniere_5e")
        @groupe = JardinSec.modele.entities.add_group
        @groupe.name = "Jardiniere_5e"
        @groupe.layer = JardinSec.calque("02 Jardinieres")
      end
      @groupe
    end

    def self.reprendre
      JardinSec.effacer("Jardiniere_5e")
      @groupe = nil
      puts "Modele efface. Reprendre a l'etape 1."
    end

    # ETAPE 1 : le rectangle du fond, 1,20 m sur 0,80 m.
    def self.etape1
      JardinSec.operation("Etape 1 - le fond") do
        pts = [[0, 0, 0], [LONGUEUR, 0, 0], [LONGUEUR, LARGEUR, 0], [0, LARGEUR, 0]]
        pts = pts.map { |x, y, z| Geom::Point3d.new(JardinSec.m(x), JardinSec.m(y), JardinSec.m(z)) }
        face = groupe.entities.add_face(pts)
        face.reverse! if face.normal.z < 0
        face.material = JardinSec.mat("bois")
      end
      puts "Etape 1 : rectangle #{LONGUEUR} x #{LARGEUR} m, surface #{format('%.3f', LONGUEUR * LARGEUR)} m2."
      puts "Au clavier, l'eleve tape : 1,20 ; 0,80 puis Entree."
    end

    # ETAPE 2 : Pousser-Tirer de 0,02 m pour donner l'epaisseur de la planche.
    def self.etape2
      JardinSec.operation("Etape 2 - epaisseur du fond") do
        face = groupe.entities.grep(Sketchup::Face).max_by(&:area)
        face.reverse! if face.normal.z < 0
        face.pushpull(JardinSec.m(EPAISSEUR))
        groupe.material = JardinSec.mat("bois")
      end
      puts "Etape 2 : Pousser-Tirer de #{EPAISSEUR} m. Le fond est maintenant un volume."
    end

    # ETAPE 3 : la premiere paroi longue, cote Y = 0.
    def self.etape3
      JardinSec.operation("Etape 3 - paroi longue avant") do
        JardinSec.boite(groupe.entities, 0, 0, EPAISSEUR, LONGUEUR, EPAISSEUR, HAUTEUR,
                        "paroi_longue_avant", "bois")
      end
      puts "Etape 3 : paroi de #{LONGUEUR} x #{HAUTEUR} m, epaisseur #{EPAISSEUR} m."
    end

    # ETAPE 4 : la paroi opposee, obtenue par copie avec Deplacer et la touche Ctrl.
    def self.etape4
      JardinSec.operation("Etape 4 - paroi longue arriere") do
        JardinSec.boite(groupe.entities, 0, LARGEUR - EPAISSEUR, EPAISSEUR,
                        LONGUEUR, EPAISSEUR, HAUTEUR, "paroi_longue_arriere", "bois")
      end
      puts "Etape 4 : copie a #{format('%.2f', LARGEUR - EPAISSEUR)} m. En classe, Deplacer avec Ctrl."
    end

    # ETAPE 5 : les deux parois courtes, qui se logent entre les parois longues.
    def self.etape5
      courte = LARGEUR - 2 * EPAISSEUR
      JardinSec.operation("Etape 5 - parois courtes") do
        JardinSec.boite(groupe.entities, 0, EPAISSEUR, EPAISSEUR,
                        EPAISSEUR, courte, HAUTEUR, "paroi_courte_gauche", "bois")
        JardinSec.boite(groupe.entities, LONGUEUR - EPAISSEUR, EPAISSEUR, EPAISSEUR,
                        EPAISSEUR, courte, HAUTEUR, "paroi_courte_droite", "bois")
      end
      puts "Etape 5 : longueur des parois courtes = #{LARGEUR} - 2 x #{EPAISSEUR} = #{format('%.2f', courte)} m."
      puts "C'est la question piege de la fiche : ne pas oublier les deux epaisseurs."
    end

    # ETAPE 6 : les quatre montants d'angle, qui tiennent l'assemblage.
    def self.etape6
      d = EPAISSEUR
      positions = [[d, d], [LONGUEUR - d - MONTANT, d],
                   [d, LARGEUR - d - MONTANT], [LONGUEUR - d - MONTANT, LARGEUR - d - MONTANT]]
      JardinSec.operation("Etape 6 - montants d'angle") do
        positions.each_with_index do |(x, y), i|
          JardinSec.boite(groupe.entities, x, y, EPAISSEUR, MONTANT, MONTANT, HAUTEUR,
                          "montant_#{i + 1}", "bois")
        end
      end
      puts "Etape 6 : quatre montants de #{MONTANT} x #{MONTANT} x #{HAUTEUR} m."
      puts "La jardiniere est terminee. Hauteur totale #{format('%.2f', EPAISSEUR + HAUTEUR)} m."
    end

    def self.tout
      reprendre
      etape1; etape2; etape3; etape4; etape5; etape6
      remplir
      JardinSec.modele.active_view.zoom_extents
      nomenclature
    end

    # Terre et paillage, pour la vue de presentation.
    def self.remplir
      int_l = LONGUEUR - 2 * EPAISSEUR
      int_p = LARGEUR - 2 * EPAISSEUR
      JardinSec.operation("Terre et paillage") do
        JardinSec.boite(groupe.entities, EPAISSEUR, EPAISSEUR, EPAISSEUR,
                        int_l, int_p, TERRE, "terre", "terre")
        JardinSec.boite(groupe.entities, EPAISSEUR, EPAISSEUR, EPAISSEUR + TERRE,
                        int_l, int_p, PAILLAGE, "paillage", "paillage")
      end
    end

    # Le tableau que les eleves doivent retrouver a l'activite 3 de la seance 4.
    def self.nomenclature
      planche = 0.10   # largeur utile d'une planche de palette, en m
      lignes = [
        ["Fond",           4, LONGUEUR - 2 * EPAISSEUR, planche, EPAISSEUR],
        ["Paroi longue",   6, LONGUEUR,                 planche, EPAISSEUR],
        ["Paroi courte",   6, LARGEUR - 2 * EPAISSEUR,  planche, EPAISSEUR],
        ["Montant angle",  4, HAUTEUR,                  MONTANT, MONTANT]
      ]
      JardinSec.titre("Nomenclature d'une jardiniere")
      puts format("%-16s %5s %10s %10s %10s %12s", "Piece", "Nb", "Long. m", "Larg. m", "Ep. m", "Total m")
      total = 0.0
      lignes.each do |nom, nb, l, la, ep|
        total += nb * l
        puts format("%-16s %5d %10.3f %10.3f %10.3f %12.2f", nom, nb, l, la, ep, nb * l)
      end
      puts "-" * 68
      puts format("%-16s %5s %10s %10s %10s %12.2f", "Total planche", "", "", "", "", total)
      palettes = (total / (5 * 1.2)).ceil
      puts ""
      puts "Volume utile de terre  : #{format('%.3f', (LONGUEUR - 2 * EPAISSEUR) * (LARGEUR - 2 * EPAISSEUR) * TERRE)} m3, soit environ 220 litres."
      puts "Longueur de planche    : #{format('%.2f', total)} m par jardiniere."
      puts "Palettes necessaires   : #{palettes} par jardiniere, #{palettes * 8} pour les huit."
      puts "Hauteur de travail     : #{format('%.2f', EPAISSEUR + HAUTEUR)} m, contrainte FC6 respectee (0,25 a 0,80 m)."
      total
    end

    # Implantation des huit jardinieres dans la cour, deux rangees de quatre.
    def self.implanter
      grp = groupe
      unless grp.respond_to?(:to_component)
        puts "Construire d'abord la jardiniere avec JardinSec::Jardiniere.tout"
        return
      end
      origine = grp.to_component        # le groupe devient un composant
      @groupe = nil
      defn = origine.definition
      defn.name = "Jardiniere_5e"
      ents = JardinSec.modele.entities
      JardinSec.operation("Implantation des huit jardinieres") do
        rangees = [0.80, 2.80]         # position en Y des deux rangees
        depart_x = 2.00
        pas_x = LONGUEUR + 0.70        # entraxe, 0,70 m de passage entre deux bacs
        rangees.each_with_index do |y, r|
          4.times do |c|
            next if r.zero? && c.zero?   # le premier exemplaire est deja place
            t = Geom::Transformation.new(
              Geom::Point3d.new(JardinSec.m(depart_x + c * pas_x), JardinSec.m(y), 0))
            inst = ents.add_instance(defn, t)
            inst.layer = JardinSec.calque("02 Jardinieres")
            inst.name = "Jardiniere_#{r * 4 + c + 1}"
          end
        end
        origine.transform!(Geom::Transformation.new(
          Geom::Point3d.new(JardinSec.m(depart_x), JardinSec.m(0.80), 0)))
        origine.name = "Jardiniere_1"
      end
      JardinSec.modele.active_view.zoom_extents
      puts "Huit jardinieres implantees, surface cultivee #{format('%.2f', 8 * LONGUEUR * LARGEUR)} m2."
      puts "Passage libre restant entre les deux rangees : 1,20 m. Contrainte respectee."
    end
  end
end

puts "Charge. Taper : JardinSec::Jardiniere.etape1 puis etape2, etc."
