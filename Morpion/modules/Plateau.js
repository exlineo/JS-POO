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
            this.resultat = new Array(nb); // Le tableau qui va recevoir toutes les réponses
            this.reponses = 0; // Comptabilité des réponses faites

            this.plateau = plateau; // On sauvegarde l'élément HTML du plateau dans une variable de la classe
            this.plateau.style.width = Math.sqrt(nb) * taille + 'px';
            this.creeCases(nb, taille); // Initialiser les cases en fonction des paramètres donnés dans la classe

            this.joueur = false; // Joueur 1 ou 2, false, true

            // Ecouter l'événement case envoyé par... les cases lorsqu'elles sont cliquées
            addEventListener('case',
                (e) => {
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
         * Bon, il faudrait améliorer ce code pas terrible. Je compte sur vous.
         */
    testScore() {
        this.reponses++;
        let tmp = this.resultat.toString();
        let res = this.resultat;
        // let reg = /X/g;
        let ok = false;

        if (res[0] != undefined && res[0] == res[1] && res[1] == res[2]) {
            ok = true;
            console.log("Colonne 1 faite");
        }

        if (res[3] != undefined && res[3] == res[4] && res[4] == res[5]) {
            ok = true;
            console.log("Colonne 1 faite");
        }
        if (res[6] != undefined && res[6] == res[7] && res[7] == res[8]) {
            ok = true;
            console.log("Colonne 1 faite");
        }

        if (res[0] != undefined && res[0] == res[3] && res[3] == res[6]) {
            ok = true;
            console.log("Colonne 1 faite");
        }

        if (res[1] != undefined && res[1] == res[4] && res[4] == res[7]) {
            ok = true;
            console.log("Colonne 2 faite");
        }

        if (res[2] != undefined && res[2] == res[5] && res[5] == res[8]) {
            ok = true;
            console.log("Colonne 3 faite");
        }

        if (res[0] != undefined && res[0] == res[4] && res[4] == res[8]) {
            ok = true;
            console.log("Diagonale gauche / droite faite");
        }

        if (res[2] != undefined && res[2] == res[4] && res[4] == res[6]) {
            ok = true;
            console.log("Diagonale droite / gauche faite");
        }
        console.log(this.reponses);
        if (ok) {
            this.affichage.setTexte("<h1>C'est fini !</h1><p>Bravo pour cette victoire</p>");
        } else if (this.reponses >= 8) {
            this.affichage.setTexte("<h1>C'est fini !</h1><p>Malheureusement personne n'a gagné</p>");
        }
    }
}

var plateau = new Plateau(9, 200, document.querySelector('section'));