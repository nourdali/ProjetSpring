import { Device } from "./device";

export class Affectation {
    id: number;
    dateAffect: Date = new Date();
    dateRetour: Date = new Date();
    device: Device;
    utilisateur: any;
  
   
  }