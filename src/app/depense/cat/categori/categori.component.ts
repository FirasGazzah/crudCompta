import { Component, OnInit } from '@angular/core';
import {Categorie, Departement} from '../../../shared/models/depense';
import {DepenseService} from '../../../shared/services/depense.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-categori',
  templateUrl: './categori.component.html',
  styleUrls: ['./categori.component.scss']
})
export class CategoriComponent implements OnInit {
  cat: Categorie = new Categorie();

  constructor(private depenseService: DepenseService) { }

  ngOnInit(): void {
  }

  addCategorie() {
    this.depenseService.addCategories(this.cat).subscribe((next) => {
        this.cat = new Categorie();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Success',
          text: 'Ajoutez avec success',
          showConfirmButton: true,
        });
      },
        error => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Erorr',
          text: error,
          showConfirmButton: true,
        });
    });
  }
}
