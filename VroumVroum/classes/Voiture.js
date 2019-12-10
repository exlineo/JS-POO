/**
 * Classe définissant une voiture
 * @Class Voiture 
 * @extends Moteur
 */
class Voiture extends Moteur {
    /**
     * Identifier le type de voiture dont il s'agit
     * @param {string} couleur La couleur de l'objet
     * @param {string} marque La marque à afficher
     * @param {string} motorisation La valeur à modifier dans la classe moteur 
     * @param {HTMLElement} message L'endroit dans le DOM où nous allons écrire des trucs 
     */
    constructor(couleur, marque, motorisation) {
            super(motorisation);
            this.couleur = couleur;
            this.marque = marque;
            this.message = document.querySelector('section');
        }
        /**
         * Appeler cette fonction pour en savoir plus sur la voiture créée
         */
    tesBeauToi() {
        console.log("Mon pédigrée");
        console.log("Couleur : " + this.couleur);
        console.log("Maque : " + this.marque);
        console.log("Motorisation : " + this.motorisation);
        let el = document.createElement('article');
        el.innerHTML = `
            <h1>Mon pédigrée</h1>
            <p>Couleur : ${this.couleur}</p>
            <p>Maque : ${this.marque}</p>
            <p>Motorisation : ${this.motorisation}</p>
        `;
        console.log(this.message);
        this.message.appendChild(el);
    }
}

var tesla = new Voiture('Bleu ciel', 'Tesla', 'Electrique');
tesla.tesBeauToi();
tesla.klaxonne();

var twingo = new Voiture('Rouge', 'Renault', 'Essence', document.querySelector('section'));
tesla.tesBeauToi();