import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Categorie, Depense} from '../../shared/models/depense';
import {FactureModel} from '../../shared/models/facture';
import {FactureService} from '../../shared/services/facture.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-showfacture',
  templateUrl: './showfacture.component.html',
  styleUrls: ['./showfacture.component.scss']
})
export class ShowfactureComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'produits', 'client', 'quantiter', 'totale'];
  dataSource: MatTableDataSource<FactureModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serviceFacture: FactureService) {
    this.serviceFacture.getFactures().subscribe((result) =>
    {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngOnInit(): void {
  }

}
