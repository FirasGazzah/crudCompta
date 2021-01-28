import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Categorie, Departement, Depense, Sub2Categorie, SubCategorie} from '../models/depense';
import {Fournisseur} from '../models/fournisseur';
import {CommandeModel, MagasinModel} from '../models/commande';
import {FactureModel} from '../models/facture';

@Injectable({providedIn: 'root'})
export class FactureService {
    private url = environment.API;

    // httpOptions = {
    //     headers: new HttpHeaders({
    //         'Content-Type': 'application/json',
    //          'Authorization': 'bearer ' + localStorage.getItem('JWT_TOKEN')
    //     })
    // };
    constructor(private http: HttpClient) { }

  getMagasin(): Observable<MagasinModel[]> {
    return this.http.get<MagasinModel[]>(this.url + '/magasin');
  }
  public getCmds(): Observable<CommandeModel[]> {
    return this.http.get<CommandeModel[]>(this.url + '/cmd/all');
  }
  addFacture(rec): Observable<any> {
    return this.http.post<any>(this.url + '/facture', rec);
  }
  getFactures(): Observable<FactureModel[]> {
    return this.http.get<FactureModel[]>(this.url + '/facture');
  }
}
