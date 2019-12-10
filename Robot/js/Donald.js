/**
 * Classe étendue du Robot pour définir Donald
 * @class Donald
 */
class Donald extends Robot {
    /**
     * Utilisation de super pour redéfinir les valeur de la classe héritée
     */
    constructor() {
        super();
        this.x = 12;
        this.y = 250;
        this.bouclier = 10000000000;
        this.vitesse = 500;
        this.reserve = 1000;
    }
    /**
     * Le robot peut maintenant voler
     */
    voler() {
        this.x += this.vitesse;
    }
    /**
     * Le robot peut ramasser des fruits
     * @param {string} fruit 
     */
    ramasseFruit(fruit) {
        this.reserve++;
    }
    /**
     * Le robot peut absorber une certaine quantité de radiations
     * @param {number} val 
     */
    absorbeRadiationsNucleaire(val) {
        if (attaque > val) {
            val = infinite;
        }
        return "hu, hu, hu, même pas mal";
    }
    /**
     * Le robot a un super pouvoir
     */
    deTouteFafonMonPapaEstPolicier() {
        return "il arrête le tien";
    }
}

var donald = new Donald();
var trump = new Robot();