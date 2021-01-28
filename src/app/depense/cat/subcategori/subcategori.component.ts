import {Component, OnInit} from '@angular/core';
import {Categorie, Sub2Categorie, Sub3Categorie, SubCategorie} from '../../../shared/models/depense';
import {Observable} from 'rxjs';
import {DepenseService} from '../../../shared/services/depense.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-subcategori',
  templateUrl: './subcategori.component.html',
  styleUrls: ['./subcategori.component.scss']
})
export class SubcategoriComponent implements OnInit {
  subCat: SubCategorie = new SubCategorie();
  subCat2: Sub2Categorie = new Sub2Categorie();
  subCat3: Sub3Categorie = new Sub3Categorie();

  subCats: SubCategorie[];
  subCat2s: Sub2Categorie[];
  subCat3s: Sub3Categorie[];
  cat: Observable<Categorie[]>;
  form: FormGroup;
  c: SubCategorie = new SubCategorie();
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private depenseService: DepenseService) {
    this.cat = this.depenseService.getCategories();
    this.depenseService.getSubCategories().subscribe((result) => this.subCats = result);
    this.depenseService.getSubCategories2().subscribe((result) => this.subCat2s = result);
  }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      cat: ['', Validators.required],
      subcat: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      cat: ['', Validators.required],
      subcat: ['', Validators.required],
      sub2cat: ['', Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group({
      cat: ['', Validators.required],
      subcat: ['', Validators.required],
      sub2cat: ['', Validators.required],
      sub3cat: ['', Validators.required],
    });
  }

  addSubCategorie() {
    this.c.id = this.secondFormGroup.value.subcat;
    this.subCat.nom = this.secondFormGroup.value.sub2cat;
    this.depenseService.addSubCategories(this.subCat, this.c.id).subscribe(() =>
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ajoutez avec success',
        showConfirmButton: true,
      }));
  }

  addSubCategorie2() {
    this.c.id = this.secondFormGroup.value.subcat;
    this.subCat2.nom = this.secondFormGroup.value.sub2cat;
    this.depenseService.addSub2Categories(this.subCat2, this.c.id).subscribe(() =>
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ajoutez avec success',
        showConfirmButton: true,
      }));
  }

  addSubCategorie3() {
    this.c.id = this.thirdFormGroup.value.sub2cat;
    this.subCat3.nom = this.thirdFormGroup.value.sub3cat;
    this.depenseService.addSub3Categories(this.subCat3, this.c.id).subscribe(() =>
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ajoutez avec success',
        showConfirmButton: true,
      }));
  }

  filter1(value: Categorie) {
   this.subCats = value.subcat;
  }

  filter2(value: any) {
    this.subCat2s = value.subcat;

  }
}
