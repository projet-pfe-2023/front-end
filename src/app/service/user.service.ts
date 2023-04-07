import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://localhost:8080/api/test/User';

  constructor(private httpClient:HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiURL}/adduser`, user);
  }

   login(user: User): Observable<any>{
  
    return this.httpClient.post<User>(`${this.apiURL}/Login`, user);
  }

}
