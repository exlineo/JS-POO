/**
 * @Class Définir le moteur d'une voiture (hérité)
 */
class Moteur {

    constructor(motorisation) {
            this.motorisation = motorisation;
        }
        /**
         * Fonction qui fait démarrer le moteur
         */
    demarre() {
            console.log("Vroooum, tuf, tuf, tuf, vroooooouuuuum (c'est ma voiture qui marche comme ça, désolé");
        }
        /**
         * Donner un coup de klaxon
         */
    klaxonne() {
            console.log("Bip, bip");
        }
        /**
         * Vérifier la motorisation du véhicule
         */
    sousLeCapot() {
        console.log("T'as quoi sous le capot ?");
    }
}