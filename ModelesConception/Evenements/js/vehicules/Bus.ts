import { Eleve } from "../gens/";
import { Vehicule } from "./Vehicule";

export class Bus extends Vehicule{
   constructor(){
       super();
   }

    setPassagers(liste:Array<Eleve>){
        this.listePassagers = liste.filter( p => p.age < 18);
    }
}