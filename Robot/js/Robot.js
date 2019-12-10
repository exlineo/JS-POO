/**
 * Le robot initial peut faire des trucs
 * @class Robot
 */
class Robot {
    constructor(c, j, ...p) {
        this.couleur = c;
        this.jantes = j;
        this.puissance = p;
    }
    /**
     * Le robot sait rouler
     */
    rouler() {
        this.position.left += 150;
    }
    /**
     * Le robot sait tourner
     */
    tourner() {
        this.position.left += 150;
    }
    /**
     * Le robot sait capter des trucs
     */
    capter() {
        if (this.antenne.fonction == "capter") {
            // fais un truc
        } else {
            return "Aie, aie, aie !!! Danger, je capte rien !!!";
        }
    }
    /**
     * Le robot peut émettre des ondes radio
     */
    emettre() {
        if (this.antenne.fonction == "emettre") {
            // fais un truc
        } else {
            return "gaffe, c'est une antenne qui capte, pas qui émet";
        }
    }

}