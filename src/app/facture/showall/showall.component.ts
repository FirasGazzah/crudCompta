import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CommandeModel, MagasinModel} from '../../shared/models/commande';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import Swal from 'sweetalert2';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {FactureService} from '../../shared/services/facture.service';
import {FactureModel} from '../../shared/models/facture';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.scss']
})
export class ShowallComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'date', 'magasin', 'produits', 'quantiter', 'type', 'totale'];
  commandes: CommandeModel[] = [];
  commande: CommandeModel[] = [];
  Todayscommandes: CommandeModel[] = [];
  dataSource = new MatTableDataSource<CommandeModel>(this.Todayscommandes);
  magasins: MagasinModel[];
  boutique = new MagasinModel();
  totale = 0;
  totaleQte = 0;
  date = new Date();
  haseDate = false;
  dateOut = new Date();
  factures: FactureModel[] = [];
  facture: FactureModel = new FactureModel();
  selection = new SelectionModel<CommandeModel>(true, []);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private servicefacture: FactureService ) {
    this.servicefacture.getMagasin().subscribe((value: MagasinModel[]) => { this.magasins = value});
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: CommandeModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  ngOnInit() {
    Swal.fire({
      title: 'Please Wait !',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      },
    });
    this.servicefacture.getCmds().subscribe((result) => {
      this.commandes = result.reverse();
      this.Todayscommandes = result.reverse().filter((e) =>
        this.date.getDate() === new Date(e.date).getDate()
        && this.date.getMonth() === new Date(e.date).getMonth()
        && this.date.getFullYear() === new Date(e.date).getFullYear());
      this.dataSource = new MatTableDataSource<CommandeModel>(this.Todayscommandes.reverse());
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.Todayscommandes.forEach((e) => {
        this.totale += e.totale;
        this.totaleQte += e.quantiter;
      })
      Swal.close();
    });
  }

  FilterByMagasin(value: MagasinModel) {
    this.totale = 0;
    this.totaleQte = 0;
    this.boutique.nom = value.nom;
    if (this.haseDate) {
      this.commande = this.commandes.filter((e) =>
        e.magasin.nom === value.nom
        && this.dateOut.getDate() === new Date(e.date).getDate()
        && this.dateOut.getMonth() === new Date(e.date).getMonth()
        && this.dateOut.getFullYear() === new Date(e.date).getFullYear())
      this.dataSource = new MatTableDataSource<CommandeModel>(this.commande);
    } else {
      this.commande = this.Todayscommandes.filter((e) => e.magasin.nom === value.nom);
      this.dataSource = new MatTableDataSource<CommandeModel>( this.commande);
    };
    this.calcTotal();
  }

  // datPick(event: MatDatepickerInputEvent<Date>) {
  //   this.haseDate = true;
  //   this.dateOut = event.value;
  //   if (this.boutique.nom !== undefined) {
  //     this.commande = this.commandes.filter((e) =>
  //       e.magasin.nom === this.boutique.nom
  //       && event.value.getDate() === new Date(e.date).getDate()
  //       && event.value.getMonth() === new Date(e.date).getMonth()
  //       && event.value.getFullYear() === new Date(e.date).getFullYear())
  //   } else    {
  //     this.commande = this.commandes.filter((e) =>
  //       event.value.getDate() === new Date(e.date).getDate()
  //       && event.value.getMonth() === new Date(e.date).getMonth()
  //       && event.value.getFullYear() === new Date(e.date).getFullYear());
  //   }
  //   this.dataSource = new MatTableDataSource<CommandeModel>(this.commande);
  //
  //   this.calcTotal();
  // }
  calcTotal(){
    this.totale = 0;
    this.totaleQte = 0;
    this.commande.forEach((e) => {
      this.totale += e.totale;
      this.totaleQte += e.quantiter;
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

   FilterByMonth(value: number) {
    if (this.boutique.nom !== undefined) {
      this.commande = this.commandes.filter((e) =>  new Date(e.date).getMonth().toString() === value.toString()
        && e.magasin.nom === this.boutique.nom)
    } else {    this.commande = this.commandes.filter((e) =>  new Date(e.date).getMonth().toString() === value.toString())}
    this.dataSource = new MatTableDataSource<CommandeModel>(this.commande)
    this.calcTotal();
  }

  convertFacture() {
  // this.selection.selected
    this.selection.selected.forEach((e) =>
    {
      this.facture = new FactureModel();
      this.facture.produits = e.produits;
      this.facture.client = e.client;
      this.facture.quantiter = e.quantiter;
      this.facture.totale = e.totale;
      this.servicefacture.addFacture(this.facture).subscribe()
    });
  }
}
