class Humanoides {
    // Initialisation des valeurs d'un humanoide lambda
    constructor(src) {
        this.x; // Position horizontale
        this.y; // Position verticale
        this.img = new Image(); // L'image de l'humanoïde
        this.img.onload = function() {
            this.pret = true; // Lorsque l'image est chargée on crée une variable booléenne pour indiquer que c'est ok
        }
        this.img.src = src; // Lancement du chargement de l'image
    }

    // Positionner un humanoide sur la carte en fonction de la largeur et de la hauteur du canvas
    position(l, h) {
        this.x = 32 + Math.round(Math.random() * (l - 64));
        this.y = 32 + Math.round(Math.random() * (h - 64));
    }
}