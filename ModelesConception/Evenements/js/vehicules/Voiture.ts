import { Personne } from "../gens/";
import { Vehicule } from "./Vehicule";

export class Voiture extends Vehicule{
    constructor(){
        super();
    }
    setPassagers(liste:Array<Personne>){
        this.listePassagers = liste.slice(0,3);
    }
}