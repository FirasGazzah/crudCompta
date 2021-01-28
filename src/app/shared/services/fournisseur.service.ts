import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Categorie, Departement, Depense, Sub2Categorie, SubCategorie} from '../models/depense';
import {Fournisseur} from '../models/fournisseur';

@Injectable({providedIn: 'root'})
export class FournisseurService {
    private url = environment.API + '/fournisseur';

    // httpOptions = {
    //     headers: new HttpHeaders({
    //         'Content-Type': 'application/json',
    //          'Authorization': 'bearer ' + localStorage.getItem('JWT_TOKEN')
    //     })
    // };
    constructor(private http: HttpClient) { }
    getFournisseur(): Observable<Fournisseur[]> {
      return this.http.get<Fournisseur[]>(this.url);
    }
    addFournisseur(rec: Fournisseur): Observable<Fournisseur> {
        return this.http.post<Fournisseur>(this.url, rec);
    }
}
