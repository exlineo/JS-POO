/**
 * Classe de création de streums héritant d'Humanoide
 * @class
 */
class Streum extends Humanoides {
    /**
     * @constructor
     * @param {string} src - Source de l'image à charger pour afficher le monstre
     */
    constructor(src) {
        super(src);
        this.nom = "Streum";
        this.chop = 0;
    }
}