import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manifest } from '../manifest';

@Injectable({
  providedIn: 'root'
})
export class DouaneService {
  private apiURL = 'http://localhost:8080/api/test/Douane';

  constructor(private http: HttpClient) { }

  acceptManifest(manifestId: number): Observable<Manifest> {
    const url = `${this.apiURL}/manifests/${manifestId}/accept`;
    return this.http.put<Manifest>(url, {});
  }
  rejectManifest(manifestId: number): Observable<Manifest> {
    const url = `${this.apiURL}/manifests/${manifestId}/reject`;
    return this.http.put<Manifest>(url, {});
  }
}
