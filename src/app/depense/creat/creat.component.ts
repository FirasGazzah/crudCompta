import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Categorie, Departement, Depense, Sub2Categorie, Sub3Categorie, SubCategorie} from '../../shared/models/depense';
import {DepenseService} from '../../shared/services/depense.service';
import Swal from 'sweetalert2';
import {Observable} from 'rxjs';
import {Fournisseur} from '../../shared/models/fournisseur';
import {FournisseurService} from '../../shared/services/fournisseur.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CategoriComponent} from '../cat/categori/categori.component';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.scss']
})
export class CreatComponent implements OnInit {
  form: FormGroup;
  subCats: SubCategorie[];
  depense: Depense = new Depense();
  fournisseurs: Observable<Fournisseur[]>;
  departements: Observable<Departement[]>;
  categories: Observable<Categorie[]>;
  checked = false;
  check = false;
  charge = new FormControl('fixe');
  options: FormGroup;
  test: string;
  constructor(private dialog: MatDialog, private serviceDepense: DepenseService, private serviceFournisseur: FournisseurService, fb: FormBuilder) {
    this.options = fb.group({
      charge: this.charge,
    });
    this.fournisseurs = this.serviceFournisseur.getFournisseur();
    this.departements = this.serviceDepense.getDepartement();
    this.categories = this.serviceDepense.getCategories();

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      date: new FormControl(null, {validators: [Validators.required]}),
      desc: new FormControl(null, { validators: [Validators.required] }),
      mpay: new FormControl(null, { validators: [Validators.required] }),
      cat: new FormControl(null, { validators: [Validators.required] }),
      cat2: new FormControl(null, { validators: [Validators.required] }),
      montant: new FormControl(null, { validators: [Validators.required] }),
      dep: new FormControl(null, { validators: [Validators.required] }),
      facture: new FormControl(null, { validators: [Validators.required] }),
      fourni: new FormControl(null, { validators: [Validators.required] }),
      charge: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  public addDepense() {
    this.depense.categorie = this.form.value.cat;
    this.depense.description = this.form.value.desc;
    this.depense.dep = this.form.value.dep;
    this.depense.date = this.form.value.date;
    this.depense.montant = this.form.value.montant;
    this.depense.mpay = this.form.value.mpay;
    this.depense.fourniseur = this.form.value.fourni;
    this.depense.numfacture = this.form.value.facture;
    this.depense.credit = this.checked;
    this.depense.charge = this.options.value.charge;
    // @ts-ignore
    this.serviceDepense.addDepense(this.depense).subscribe(() =>
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ajoutez avec success',
        showConfirmButton: true,
      }));
  }

  Cheque(value: any) {
    if (value === 'cheque') {window.alert('cheque!!');}
    this.check = value !== 'credit';
  }

  subCat(value: SubCategorie) {
    this.subCats = value.subcat;
  }

  action(value: any) {
    console.log( '##################')
    console.log(value)
    console.log( '----------------')
    console.log( this.form.value.cat)
    console.log( '----------------')
    console.log( this.form.value.cat2)
    console.log( '##################')

  }
  openCat() {
    this.dialog.open(CategoriComponent);
  }
}
