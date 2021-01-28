import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Fournisseur} from '../../shared/models/fournisseur';
import {FournisseurService} from '../../shared/services/fournisseur.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.scss']
})
export class CreatComponent implements OnInit {
  form: FormGroup;
  fournisseur: Fournisseur = new Fournisseur();

  constructor(private serviceFournisseur: FournisseurService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl(null, {validators: [Validators.required]}),
      adr: new FormControl(null, { validators: [Validators.required] }),
      mat: new FormControl(null, { validators: [Validators.required] }),
      paye: new FormControl(null, { validators: [Validators.required] }),
      nonpaye: new FormControl(null, { validators: [Validators.required] }),
      totale: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  addFournisseur() {
    this.fournisseur.nom = this.form.value.nom;
    this.fournisseur.adr = this.form.value.adr;
    this.fournisseur.mf = this.form.value.mat;
    this.fournisseur.totale = this.form.value.totale;
    this.fournisseur.totaleNonPaye = this.form.value.nonpaye;
    this.fournisseur.totalePayee = this.form.value.paye;
    this.serviceFournisseur.addFournisseur(this.fournisseur).subscribe(() =>
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ajoutez avec success',
        showConfirmButton: true,
      }));
  }
}
