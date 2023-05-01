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
    .pipe(
      tap(res => this.saveToken(res.token))
    );
    
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
  
    logout() {
      sessionStorage.removeItem(this.TOKEN_KEY);
    }
}
