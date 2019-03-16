// Initialiser la mécanique du jeu : nombre de bombes, largeur et hauteur du canvas, durée du jeu
var mecanique = new Mecanique(10, window.innerWidth - 16, window.innerHeight - 16, 60);
mecanique.go(); // Lancement de la boucle du jeu

// Redimensionnement du canvas lors d'un changement de taille de la fenêtre
addEventListener('resize', function(event) {
    mecanique.redimensionne(window.innerWidth, window.innerHeight);
});

// Lancement d'écouteurs pour pister les touches de claviers
addEventListener("keydown", function(e) {
    mecanique.clavierPresse[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
    delete mecanique.clavierPresse[e.keyCode];
}, false);