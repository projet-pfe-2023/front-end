import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  private readonly TOKEN_KEY = 'token';
  private apiURL = "http://localhost:8080/api/test/auth";

  constructor(private http:HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL+"/register", user) 
  }

   login(user: User): Observable<any>{
    return this.http.post<User>(this.apiURL+"/authenticate", user)
    .pipe(
      tap(res => this.saveToken(res.token))
    );
   }

   private saveToken(token: string) {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

    getToken(): string {
      return sessionStorage.getItem(this.TOKEN_KEY) ?? '';
    }
  
    isLoggedIn(): boolean {
      return this.getToken() !== null;
    }
    clearToken(): void {
      sessionStorage.removeItem(this.TOKEN_KEY);
    }
    
  
    logout() {
      const url = 'http://localhost:8080/api/test/auth/logout';
      const options = {
        withCredentials: true  // add this line
      };
      return this.http.post(url, null, options);
    }
    
    
    
}
