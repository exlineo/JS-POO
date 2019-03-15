import { Plateau } from './Plateau.js';
import { Mecanique } from './Mecanique.js';

/**
 * Initialisation du jeu dans la page HTML
 * @class
 */
class Init {
    /**
     * Initialisation des classes
     */
    constructor() {
        console.log("coucou");
        this.plateau = new Plateau(9, 200, document.querySelector('section'));
        this.mecanique = new Mecanique();
    }
}

let init = new Init();