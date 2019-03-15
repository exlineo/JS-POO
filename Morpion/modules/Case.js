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
            this.statut = ''; // Enregistrer l'état du statut : '', 'X', 'O' pour le traiter dans la Mecanique
            // Création d'un élément HTML en lien avec la case
            this.el = document.createElement('article');
            this.el.setAttribute("id", this.id);

            // Ajouter un événement à la case
            this.el.onclick = (e) => {
                console.log("coucou", this.el);

                // Créer un événement pour envoyer l'information qu'une case a été cochée avec son ID (cf. Mecanique)
                let caseCocheeEvent = new CustomEvent('case', { detail: { 'id': this.id } });
                dispatchEvent(caseCocheeEvent);
            }
        }
        /**
         * afficheCase Créer une case et la renvoyer au plateau
         */
    afficheCase() {
            return this.el;
        }
        /**
         * ajouteContenu Renvoie une croix ou un rond dans la case
         * @param {boolean} coche Dire s'il faut écrire une croix (true) ou un rond (false)
         */
    ajouteContenu(joueur) {
        console.log(joueur);
        // if (this.statut == '') {
        if (joueur) {
            this.statut = 'X';
        } else {
            this.statut = 'O';
        }
        // } else {
        //     this.statut = '';
        // }
        this.el.innerText = this.statut;
        return this.statut;
    }
}