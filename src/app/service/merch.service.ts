import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Merch } from '../merch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchService {
  private apiURL = 'http://localhost:8080/api/test/Marchandise';

  constructor(private httpClient: HttpClient) { }

  addMerch(merch: Merch): Observable<Merch> {
    return this.httpClient.post<Merch>(this.apiURL + "/addmerch", merch);
  }

  getAllMerch() {
    return this.httpClient.get<Merch[]>(this.apiURL + "/all");
  }
}
