class Robot {
    constructor(c, j, ...p) {
        this.couleur = c;
        this.jantes = j;
        this.puissance = p;
        this.antenne = { type: "Hertzienne", fonction: "emettre" };
    };
    // faire rouler une voiture
    rouler() {
        this.position.left += 150;
    }
    tourner() {
        this.position.left += 150;
    }
    capter() {
        if (this.antenne.fonction == "capter") {
            // fais un truc
        } else {
            return "Aie, aie, aie !!! Danger, je capte rien !!!";
        }
    }
    emettre() {
        if (this.antenne.fonction == "emettre") {
            // fais un truc
        } else {
            return "gaffe, c'est une antenne qui capte, pas qui émet";
        }
    }

}