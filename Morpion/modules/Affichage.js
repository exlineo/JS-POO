/**
 * Gérer les messages à afficher dans la page en fonction des situations du jeu
 * @class
 */
export class Affichage {
    /**
     * @param { HTMLElement } elMessage La section qui va recevoir les messages
     */
    constructor() {
            this.el = document.createElement('div');
            this.el.setAttribute('id', 'message');
            document.body.appendChild(this.el);

            this.el.onClick = (e) => {
                console.log("Cliqué");
                this.masqueEl();
            }
        }
        /**
         * Afficher un message
         */
    afficheEl() {
            this.el.style.display = 'block';
        }
        /**
         * Masquer le message
         */
    masqueEl() {
            this.el.textContent = '';
            this.el.style.display = 'none'
        }
        /**
         * Ecrire un texte dans la zone de message et l'afficher
         * @param str Le chaîne de caractère à écrire
         */
    setTexte(str) {
        this.el.innerHTML = str;
        this.afficheEl();
    }
}