# encoding: UTF-8
#
# Projet jardin sec - Liceo Franco Hondureno - Technologie cycle 4
# Bibliotheque commune aux cinq scripts.
#
# UTILISATION
#   1. SketchUp Pro, menu Fenetre > Console Ruby.
#   2. Taper : load "C:/chemin/vers/_commun.rb"
#   3. Puis charger le script voulu, par exemple : load "C:/chemin/vers/00_site_avant.rb"
#
# Toutes les dimensions sont donnees en metres. Le modele est a l'echelle 1 pour 1.

module JardinSec

  # Conversion metres vers unites internes de SketchUp.
  def self.m(valeur)
    valeur.to_f.m
  end

  def self.modele
    Sketchup.active_model
  end

  # Renvoie un materiau, en le creant au premier appel.
  def self.couleur(nom, r, v, b, alpha = 1.0)
    mats = modele.materials
    mat = mats[nom]
    if mat.nil?
      mat = mats.add(nom)
      mat.color = Sketchup::Color.new(r, v, b)
      mat.alpha = alpha
    end
    mat
  end

  PALETTE = {
    "sol_gravier"   => [176, 170, 156],
    "beton"         => [163, 163, 158],
    "brique"        => [172, 118,  86],
    "haie"          => [ 86, 122,  67],
    "bois"          => [176, 137,  86],
    "bois_bleu"     => [ 72, 128, 168],
    "bois_vert"     => [122, 166, 148],
    "terre"         => [ 92,  70,  52],
    "paillage"      => [138, 106,  70],
    "eau"           => [ 84, 148, 190],
    "plastique_noir"=> [ 46,  46,  48],
    "metal"         => [140, 146, 150],
    "feuillage"     => [ 96, 148,  76],
    "fleur_orange"  => [230, 140,  40],
    "fleur_jaune"   => [235, 200,  60],
    "fleur_rouge"   => [200,  70,  60],
    "verre_solaire" => [ 36,  52,  84],
    "vitre"         => [150, 180, 195]
  }

  def self.mat(nom)
    rvb = PALETTE[nom] || [200, 200, 200]
    couleur(nom, rvb[0], rvb[1], rvb[2])
  end

  # Renvoie un calque, en le creant au premier appel.
  def self.calque(nom)
    modele.layers[nom] || modele.layers.add(nom)
  end

  # Construit un pave droit.
  #   parent : entites d'accueil, souvent JardinSec.modele.entities
  #   x, y, z : coin bas gauche, en metres
  #   l, p, h : longueur suivant X, profondeur suivant Y, hauteur suivant Z, en metres
  def self.boite(parent, x, y, z, l, p, h, nom = "boite", matiere = nil, nom_calque = nil)
    grp = parent.add_group
    grp.name = nom
    pts = [
      Geom::Point3d.new(m(x),     m(y),     m(z)),
      Geom::Point3d.new(m(x + l), m(y),     m(z)),
      Geom::Point3d.new(m(x + l), m(y + p), m(z)),
      Geom::Point3d.new(m(x),     m(y + p), m(z))
    ]
    face = grp.entities.add_face(pts)
    face.reverse! if face.normal.z < 0
    face.pushpull(m(h))
    grp.material = mat(matiere) if matiere
    grp.layer = calque(nom_calque) if nom_calque
    grp
  end

  # Construit un cylindre vertical.
  def self.cylindre(parent, x, y, z, rayon, hauteur, nom = "cylindre", matiere = nil, nom_calque = nil, segments = 24)
    grp = parent.add_group
    grp.name = nom
    centre = Geom::Point3d.new(m(x), m(y), m(z))
    cercle = grp.entities.add_circle(centre, Geom::Vector3d.new(0, 0, 1), m(rayon), segments)
    face = grp.entities.add_face(cercle)
    face.reverse! if face.normal.z < 0
    face.pushpull(m(hauteur))
    grp.material = mat(matiere) if matiere
    grp.layer = calque(nom_calque) if nom_calque
    grp
  end

  # Construit un tube horizontal suivant X ou Y, utilise pour les tuyaux.
  def self.tube(parent, x, y, z, longueur, rayon, axe = :x, nom = "tuyau", matiere = "plastique_noir", nom_calque = nil)
    grp = parent.add_group
    grp.name = nom
    normale = (axe == :x) ? Geom::Vector3d.new(1, 0, 0) : Geom::Vector3d.new(0, 1, 0)
    centre = Geom::Point3d.new(m(x), m(y), m(z))
    cercle = grp.entities.add_circle(centre, normale, m(rayon), 12)
    face = grp.entities.add_face(cercle)
    dir = face.normal
    face.pushpull(m(longueur) * ((dir.x + dir.y) >= 0 ? 1 : -1))
    grp.material = mat(matiere)
    grp.layer = calque(nom_calque) if nom_calque
    grp
  end

  # Etiquette de texte flottante, utile pour les presentations.
  def self.etiquette(parent, x, y, z, texte)
    parent.add_text(texte, Geom::Point3d.new(m(x), m(y), m(z)))
  rescue StandardError
    nil
  end

  # Encadre une construction dans une seule operation annulable.
  def self.operation(titre)
    modele.start_operation(titre, true)
    resultat = yield
    modele.commit_operation
    resultat
  rescue StandardError => erreur
    modele.abort_operation
    puts "Erreur pendant #{titre} : #{erreur.message}"
    puts erreur.backtrace.first(3)
    nil
  end

  # Supprime un groupe par son nom, pour rejouer un script proprement.
  def self.effacer(nom)
    modele.entities.grep(Sketchup::Group).select { |g| g.name == nom }.each(&:erase!)
  end

  def self.titre(texte)
    puts ""
    puts "=" * 68
    puts texte
    puts "=" * 68
  end
end

puts "JardinSec : bibliotheque commune chargee."
