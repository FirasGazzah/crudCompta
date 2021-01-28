import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Categorie, Departement, Depense, Sub2Categorie, SubCategorie} from '../models/depense';
import {Fournisseur} from '../models/fournisseur';

@Injectable({providedIn: 'root'})
export class DepenseService {
    private url = environment.API + '/depense';

    // httpOptions = {
    //     headers: new HttpHeaders({
    //         'Content-Type': 'application/json',
    //          'Authorization': 'bearer ' + localStorage.getItem('JWT_TOKEN')
    //     })
    // };
    constructor(private http: HttpClient) { }

    getDepense(): Observable<Depense[]> {
        return this.http.get<Depense[]>(this.url);
    }

    getFournisseur(): Observable<Fournisseur[]> {
      return this.http.get<Fournisseur[]>(this.url + '/fourni');
    }
    getDepartement(): Observable<Departement[]> {
      return this.http.get<Departement[]>(this.url + '/dep');
    }
    getCategories(): Observable<Categorie[]> {
      return this.http.get<Categorie[]>(this.url + '/categories');
    }
  getSubCategories(): Observable<SubCategorie[]> {
    return this.http.get<SubCategorie[]>(this.url + '/subcategories');
  }
  getSubCategories2(): Observable<Sub2Categorie[]> {
    return this.http.get<Sub2Categorie[]>(this.url + '/subcategories2');
  }


    addDepense(rec: Depense): Observable<Depense> {
        return this.http.post<Depense>(this.url, rec);
    }
    addDepartment(rec): Observable<any> {
      return this.http.post<any>(this.url + '/dep', rec);
    }
    addCategories(rec): Observable<any> {
      return this.http.post<any>(this.url + '/categories', rec);
    }
    addSubCategories(rec, id): Observable<any> {
      return this.http.post<any>(this.url + '/subcategories/' + id, rec);
    }
    addSub2Categories(rec, id): Observable<any> {
      return this.http.post<any>(this.url + '/subcategories2/' + id, rec);
    }
    addSub3Categories(rec, id): Observable<any> {
      return this.http.post<any>(this.url + '/subcategories3/' + id, rec);
    }

}
