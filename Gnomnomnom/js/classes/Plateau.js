/**
 * Générer et gérer un plateau de jeu (Canvas HTML5)
 * @class
 */
class Plateau {
    /**
     * @constructor
     * @param {string} src 
     * @param {number} l 
     * @param {number} h 
     */
    constructor(src, l, h) {
            this.x = 0;
            this.y = 0;
            this.l = l;
            this.h = h;
            console.log(src, l, h);
            this.img = new Image();
            this.img.width = l;
            this.img.height = h;
            this.img.onload = function() {
                this.pret = true;
            }
            this.img.src = src;
            this.creePlateau(); // Lorsque l'image est chargée, on crée le plateau de jeu
        }
        /**
         * Créer la balise canvas du plateau de jeu et récupérer le contexte
         */
        // Créer une balise canvas et lui ajouter l'arrère plan
    creePlateau() {
        // Créer un canvas
        this.canvas = document.createElement("canvas");
        this.ctx2D = this.canvas.getContext("2d"); // Contexte du canvas pour dessiner les images
        this.canvas.width = this.l;
        this.canvas.height = this.h;

        this.canvas.style.marginLeft = (window.innerWidth - this.l) / 2 + "px";

        document.body.appendChild(this.canvas);
    }

    // Afficher les objets sur le plateau de jeu
    afficheObj(obj) {
        if (obj.img.pret) {
            this.ctx2D.drawImage(obj.img, obj.x, obj.y);
        }
    }

    // Ecrire du texte sur le canvas
    afficheTexte(texte, lx, ly) {
        this.ctx2D.save();
        this.ctx2D.fillStyle = "rgb(250, 250, 250)";
        this.ctx2D.font = "24px Helvetica";
        this.ctx2D.textAlign = 'center';
        this.ctx2D.textBaseline = 'middle';
        this.ctx2D.fillText(texte, lx, ly);
        this.ctx2D.restore();
    }


}