import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Fournisseur} from '../../shared/models/fournisseur';
import {FournisseurService} from '../../shared/services/fournisseur.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CategoriComponent} from '../../depense/cat/categori/categori.component';
import {DetailsComponent} from '../details/details.component';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  displayedColumns: string[] = ['id', 'mf', 'nom', 'adr', 'totale', 'totalePayee', 'totaleNonPaye'];
  dataSource: MatTableDataSource<Fournisseur>;
  fournisseures: Fournisseur[];
  @ViewChild  (MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private serviceFournisseur: FournisseurService) {
    this.serviceFournisseur.getFournisseur().subscribe((result) => {
      this.fournisseures = result;
      this.dataSource = new MatTableDataSource(this.fournisseures);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ShowDetails(value) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.panelClass = 'dialog';
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = '90vh';
    this.dialog.open(DetailsComponent,{
      data: {fournisseur: value}
    });
  }
}
