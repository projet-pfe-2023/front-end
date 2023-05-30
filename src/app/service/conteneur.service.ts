import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conteneur } from '../conteneur';
import { Observable, map, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ConteneurService{

  private apiURL = 'http://localhost:8080/api/test/Conteneur';
  baseURL: any;

  constructor(private httpClient:HttpClient) { }

  addConteneur(conteneur: Conteneur): Observable<Conteneur> {
    return this.httpClient.post<Conteneur>(`${this.apiURL}/addconteneur`, conteneur);
  }

  getAllConteneur():Observable<Conteneur[]>{  
    return this.httpClient.get<Conteneur[]>(`${this.apiURL}/all`);

  }
}