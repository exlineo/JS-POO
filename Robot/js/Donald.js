class Donald extends Robot {
    constructor() {
        super();
        this.x = 12;
        this.y = 250;
        this.bouclier = 10000000000;
        this.vitesse = 500;
        this.reserve = 1000;
    }
    voler() {
        this.x += this.vitesse;
    }
    ramasseFruit(fruit) {
        this.reserve++;
    }
    absorbeRadiationsNucleaire(val) {
        if (attaque > val) {
            val = infinite;
        }
        return "hu, hu, hu, même pas mal";
    }
    deTouteFafonMonPapaEstPolicier() {
        return "il arrête le tien";
    }
}

var donald = new Donald();
var trump = new Robot();