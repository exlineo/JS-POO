import { Chauffeur } from "../gens/";
import { Eleve } from "../gens/";

export class Vehicule{
    chauffeur:Chauffeur = new Chauffeur();
    protected listePassagers:Array<Eleve> = [];

    constructor(){}
}