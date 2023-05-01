import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://localhost:8080/api/test/User";

  constructor(private http: HttpClient) { }

  getAllusers() {
    return this.http.get<User[]>(this.apiURL + "/getall")
      .pipe(
        map(users => {
          return users.map(user => {
            return {
              ...user,
              roles: user.authorities.map(authority => authority.authority)
            }
          });
        })
      );
  }


  
}
