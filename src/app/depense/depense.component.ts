import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DepartmentComponent} from './department/department.component';
import {CategoriComponent} from './cat/categori/categori.component';
import {SubcategoriComponent} from './cat/subcategori/subcategori.component';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss']
})
export class DepenseComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDep() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.panelClass = 'dialog';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.maxHeight = '90vh';
    this.dialog.open(DepartmentComponent);
  }

  openCat() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.panelClass = 'dialog';
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = '90vh';
    this.dialog.open(CategoriComponent);
  }

  openSubCat() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.panelClass = 'dialog';
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = '90vh';
    this.dialog.open(SubcategoriComponent);
  }
}
