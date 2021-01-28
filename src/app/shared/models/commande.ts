
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
    client;
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

export class ProduitModel {
  id: number;
  reference: string;
  tailleMin: number;
  tailleMax: number;
  prix: number;
  description: string;
  image: string;
  images: string[];
  cout;
  benefice;
  promotion: boolean;
  oldprix: number;
  categori: CategoriModel;
  subcategori: SubCategoriModel;
  couleur;
  title;
  display;
  type;

}
export class PromotionModel {
  id: number;
  prixinit: number;
  prixnew;
  dateFin;
  dateDebut;
  promotion;
  produit: ProduitModel;
}
export class CategoriModel {
  id: number;
  description: string;
  nom: string;
}


export class SubCategoriModel {
  id: number;
  description: string;
  nom: string;
  categori: CategoriModel;
}

export class ProduitsModel {
  id: number;
  taille: number;
  codebare: string;
  produits: ProduitModel;
  qte: number;
}
export class MagasinModel {
  id: number;
  nom: string;
  local: string;
  datedecreation: string;
  mat: string;
}
export class UtilisateurModel {
  id;
  nom: string;
  prenom: string;
  password: string;
  username: string;
  role: string;
  refreshToken: string;
  confirmationToken: string;
  magasin: MagasinModel;
  editAuth: boolean;
  addAuth: boolean;
  deleteAuth: boolean;
}
