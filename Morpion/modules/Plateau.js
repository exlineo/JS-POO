import { Case } from './Case.js';
import { Affichage } from './Affichage.js';
/**
 * Plateu de jeu, où les cases sont dessinées
 * @class
 */
export class Plateau {
    /**
     * @param {number} nb Déterminer le nombre de cases du plateau
     * @param {number} taille Déterminer la taille des cases du plateau
     * @param {HTMLElement} plateau La balise HTML dans laquelle nous tracerons les cases
     */
    constructor(nb, taille, plateau) {
            this.cases = new Array(); // On crée un tableau qui va liste les cases disponibles
            this.resultat = new Array(nb);

            this.plateau = plateau; // On sauvegarde l'élément HTML du plateau dans une variable de la classe
            this.plateau.style.width = Math.sqrt(nb) * taille + 'px';
            this.creeCases(nb, taille); // Initialiser les cases en fonction des paramètres donnés dans la classe

            this.joueur = false; // Joueur 1 ou 2, false, true

            // Ecouter l'événement case envoyé par... les cases lorsqu'elles sont cliquées
            addEventListener('case',
                (e) => {
                    console.log(e, e.detail.id);
                    // Si la case n'a pas été cochée, on la coche
                    if (this.resultat[e.detail.id] == undefined) {
                        let tmp_statut = this.cases[e.detail.id].ajouteContenu(this.setJoueur());
                        this.setResultat(e.detail.id, tmp_statut);
                    }
                }, false);

            this.affichage = new Affichage();
            this.affichage.setTexte('<h1>Bienvenue</h1><p>Cochez les cases et essayez de faire une ligne</p>');
        }
        /**
         * Créer n cases sur le plateau (éviter les nombres premiers... et préférer les carrés (²))
         * @param {number} nb Nombre de cases à créer, reçu à l'instanciation de la classe
         * @param {number} t Taille de la case à créer
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
        /**
         * Modifier le joueur à chaque coup, joueur 1 (false) puis joueur 2 (true). Alternance à chaque fois que la fonction est appelée
         */
    setJoueur() {
            this.joueur = !this.joueur;
            return this.joueur;
        }
        /**
         * Met à jour une entrée dans le tableau des résultats avant de le tester
         * @param {number} id ID de la case cochée pour identifier dans le tableau des résultats quel entrée changer
         * @param {string} st Valeur à insérer dans le tableau
         */
    setResultat(id, st) {
            this.resultat[id] = st;
            this.testScore();
        }
        /**
         * Tester si un joueur à gagné en checkant le tableau des résultats
         */
    testScore() {
        let tmp = this.resultat.toString();
        let reg = /X/g;
        console.log("Reg", tmp.match(reg));
        console.log(tmp);
        if (tmp.indexOf('X,X,X') || tmp.indexOf('OOO')) {
            this.affichage.setTexte("<h1>C'est fini !</h1><p>Bravo pour cette victoire</p>");
        }
    }
}

var plateau = new Plateau(9, 200, document.querySelector('section'));