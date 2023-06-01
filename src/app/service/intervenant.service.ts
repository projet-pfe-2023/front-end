import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intervenant } from '../intervenant';
import { Observable, map, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class IntervenantService{

  private apiURL = 'http://localhost:8080/api/test/Intervenant';
  baseURL: any;

  constructor(private httpClient:HttpClient) { }

  addIntervenant(intervenant: Intervenant): Observable<Intervenant> {
    return this.httpClient.post<Intervenant>(`${this.apiURL}/addintervenant`, intervenant);
  }

  getAllIntervenant():Observable<Intervenant[]>{  
    return this.httpClient.get<Intervenant[]>(`${this.apiURL}/all`);

  }
}