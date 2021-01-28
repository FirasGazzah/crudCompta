import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs-compat/add/operator/finally';
import { tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {ClientModel, EtatModel} from '../model/client.model';

@Injectable({providedIn: 'root'})
export class ClientService {
    private url = environment.API + '/client';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
             'Authorization': 'bearer ' + localStorage.getItem('JWT_TOKEN')
        })
    };
    constructor(private http: HttpClient) { }

    getClients(): Observable<ClientModel[]> {
        return this.http.get<ClientModel[]>(this.url, this.httpOptions);
    }
    getEtat(): Observable<EtatModel[]> {
        return this.http.get<EtatModel[]>('assets/etat.json');
    }
    getPays(): Observable<EtatModel[]> {
        return this.http.get<EtatModel[]>('assets/pays.json');
    }

    addClient(rec: ClientModel): Observable<ClientModel> {
        return this.http.post<ClientModel>(this.url, rec);
    }

}
