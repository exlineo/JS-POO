class Bombe extends Humanoides {
    constructor(src, x, y) {
        super(src);
        this.x = x;
        this.y = y;
        this.l = 32;
        this.h = 32;
        this.nom = "Bombe";
    }

    // Animer une exploision de bombe
    // Positionner une bombe comme pour les humanoïdes sur la carte en fonction de la largeur et de la hauteur du canvas
    position(l, h) {
        this.x = 32 + Math.round(Math.random() * (l - 64));
        this.y = 32 + Math.round(Math.random() * (h - 64));
    }
}