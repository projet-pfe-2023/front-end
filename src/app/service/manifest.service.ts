import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manifest } from '../manifest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ManifestService {

  private apiURL = 'http://localhost:8080/api/test/Manifest';


  constructor(private httpClient: HttpClient) { }


  addManifest(manifest: Manifest): Observable<Manifest> {
    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.httpClient.post<Manifest>(this.apiURL + "/addmanifests", manifest, httpOptions);
  }



  getAllManifest() {
    return this.httpClient.get<Manifest[]>(this.apiURL + "/all");

  }



  getManifestsForUser(): Observable<Manifest[]> {
    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.httpClient.get<Manifest[]>(this.apiURL + "/demandesuser", httpOptions);
  }




  updateManifest(manifestId: number, requestBody: Manifest): Observable<Manifest> {
    const url = `${this.apiURL}/manifests/${manifestId}`;
    return this.httpClient.put<Manifest>(url, requestBody);
  }



  demandeModification(manifestId: number): Observable<Manifest> {
    const url = `${this.apiURL}/demande/${manifestId}/Modifier`;
    return this.httpClient.put<Manifest>(url, {});
  }

  getTotalManifest() {
    return this.httpClient.get<number>(this.apiURL + "/total");
  }

  getTotalManifestByStatus() {
    return this.httpClient.get<number>(this.apiURL + "/totalmanifest");
  }

}