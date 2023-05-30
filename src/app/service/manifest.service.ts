import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manifest } from '../manifest';
import { Observable, map, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ManifestService{

  private apiURL = 'http://localhost:8080/api/test/Manifest';
  baseURL: any;

  constructor(private httpClient:HttpClient) { }

  addManifest(manifest: Manifest): Observable<Manifest> {
    return this.httpClient.post<Manifest>(`${this.apiURL}/addmanifest`, manifest);
  }

  getAllManifest():Observable<Manifest[]>{  
    return this.httpClient.get<Manifest[]>(`${this.apiURL}/all`);

  }
}