import {Fournisseur} from './fournisseur';

export class Depense {
  id;
  date;
  description;
  categorie;
  montant;
  fourniseur: Fournisseur;
  mpay;
  dep: Departement;
  numfacture;
  cheque: Cheques[];
  credit;
  charge;
}

export class Departement {
  id;
  nom;
}

export class Categorie {
  id;
  nom;
  subcat: SubCategorie[];
}
export class SubCategorie {
  id;
  nom;
  subcat: SubCategorie[];
}

export class Sub2Categorie {
  id;
  nom;
  subcat: Sub3Categorie[];
}
export class Sub3Categorie {
  id;
  nom;
}

export class Cheques {
  id: number;
  montant = '';
  num = '';
  date = null;
  nom = '';
  bank = '';
}

