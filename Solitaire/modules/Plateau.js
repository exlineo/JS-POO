/**
 * Plateu de jeu, où les cases sont dessinées
 */
export class Plateau {
    /**
     * @param {number} nb Déterminer le nombre de cases du plateau
     * @param {number} taille Déterminer la taille des cases du plateau
     * @param {htmlElement} plateau La balise HTML dans laquelle nous tracerons les cases
     */
    constructor(nb, taille, plateau) {
            this.cases = new Array(); // On crée un tableau qui va liste les cases disponibles
            this.plateau = plateau; // On sauvegarde l'élément HTML du plateau dans une variable de la classe
            this.plateau.style.width = Math.sqrt(nb) * taille + 'px';
            this.creeCases(nb, taille);

        }
        /**
         * 
         * @param {number} nb Nombre de cases à créer, reçu à l'instanciation de la classe
         * @param {*} t Taille de la case à créer
         */
    creeCases(nb, t) {
            for (let i = 0; i < nb; ++i) {
                let c = new Case(i, t);
                this.setPlateau(c);
            }
        }
        /**
         * Dessiner le plateau de jeu et enregistrer les cases
         * @param {Case} c Une case à dessiner sur le plateau de jeu
         */
    setPlateau(c) {
        this.cases.push(c);
        this.plateau.appendChild(c.afficheCase());
    }
}

/**
 * Créer une case de jeu avec ses évanements
 * @class
 */
export class Case {
    /**
     * Créer des cases sur la plateau
     * @param id Id de la case créée
     * @param {number} taille Taille de la case créée
     */
    constructor(id, taille) {
            this.id = id;
            this.taille = taille;
            this.clique = false; // La case a-t-elle été cliquée ?
        }
        /**
         * Créer une case et la renvoyer au plateau
         */
    afficheCase() {
        let el = document.createElement('article');
        el.setAttribute("id", this.id);
        return el;
    }
}