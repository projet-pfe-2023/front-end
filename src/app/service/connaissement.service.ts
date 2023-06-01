import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Connaissement } from '../connaissement';
import { Observable, map, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ConnaissementService{

  private apiURL = 'http://localhost:8080/api/test/Connaissement';
  baseURL: any;

  constructor(private httpClient:HttpClient) { }

  addConnaissement(connaissement: Connaissement): Observable<Connaissement> {
    return this.httpClient.post<Connaissement>(`${this.apiURL}/addconnaissement`, connaissement);
  }

  getAllConnaissement():Observable<Connaissement[]>{  
    return this.httpClient.get<Connaissement[]>(`${this.apiURL}/all`);

  }
}