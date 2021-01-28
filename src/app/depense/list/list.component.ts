import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Depense} from '../../shared/models/depense';
import {DepenseService} from '../../shared/services/depense.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'num', 'date', 'description', 'categorie', 'montant', 'fourniseur', 'mpay', 'dep'];
  dataSource: MatTableDataSource<Depense>;
  depenses: Depense[];
  @Input() details;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private depenseServices: DepenseService) {
  }
  ngOnInit(): void {
    this.depenseServices.getDepense().subscribe((result) => {
      if (this.details){
        this.depenses = result.filter((e) => e.fourniseur.id === this.details);
      } else {
        this.depenses = result;
      }
      this.dataSource = new MatTableDataSource(this.depenses);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
