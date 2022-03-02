import { Personne } from "./";
import { Immatriculation } from "../vehicules/Immatriculation";

export default class Chauffeur extends Personne{
    carteGrise:Immatriculation;

    constructor(){
        super();

        addEventListener('CHANGE_TOURNEE', (e) => {
            console.log(e['detail'].lattitude);
        })
    }

}