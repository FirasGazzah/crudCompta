
import {ProduitsModel} from './produits.model';
import {MagasinModel} from './magasin.model';
import {UtilisateurModel} from './utilisateur.model';
export class ChequesModel {
    id: number;
    montant = '';
    num = '';
    date = null;
    nom = '';
    bank = '';
}
export class CommandeProduits {
    qte;
    produits: ProduitsModel;
}
export class CommandeModel {
    id: number;
    idcmd: number;
    quantiter: number;
    produits: CommandeProduits[] = [];
    magasin: MagasinModel;
    totale: number;
    type: string;
    date: Date;
    user = new UtilisateurModel();
    espece;
    visa;
    cheque: ChequesModel[] = [];
    remise: number;
    totaleRemise: number;
    sold: boolean;
}

export class CommandeEnLigneProduits {
    qte;
    produits: ProduitsModel;
}
export class CmdEnligne {
    id;
    nom;
    num;
    cmdP: CommandeEnLigneProduits [] = [];
    adress;
    quantiter;
    livreur;
    etat;
    payer: boolean;
    totale = 0;
    date;
    user: UtilisateurModel;
    source;
    gouvern: string;
    pays: string;
    codecolis;
}
export  class ReservationList {
    qte;
    produits: ProduitsModel;
}
export class Reservation {
    id;
    date;
    cmdP: ReservationList[] = [];
    nom;
    num;
    totale;
    avance;
    rest;
    etat;
    magasin: MagasinModel;
    user: UtilisateurModel;
}
