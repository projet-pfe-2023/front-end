import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, map, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://localhost:8080/api/test/User";

  constructor(private http: HttpClient) { }

  updateUserRole(id: number, newRole: string): Observable<User> {
    const url = this.apiURL + "/users/" + id + "/role";
    const request = { newRole };
    return this.http.put<User>(url, request);
  }
  
  findUserById(id: number): Observable<User | null> {
    if (isNaN(id) || id < 1) {
      console.log('Invalid user ID');
      return of(null);
    }
    const url = this.apiURL + "/getuser/" +id; 
    return this.http.get<User>(url);
  }

  deactivateUser(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}/desactiver`;
    return this.http.put(url, null);
  }

  // activer les offre
  activateUser(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}/activer`;
    return this.http.put(url, null);
  }

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

  deleteUser(id: number): Observable<object>{
    return this.http.delete(this.apiURL +"/" + id);
  }
}
