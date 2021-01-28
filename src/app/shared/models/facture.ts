import {CommandeProduits} from './commande';

export class FactureModel {
    id: number;
    date;
    client;
    produits: CommandeProduits[];
    totale;
    quantiter;
}
