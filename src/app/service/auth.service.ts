import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  private readonly TOKEN_KEY = 'token';
  private apiURL = "http://localhost:8080/api/test/auth";

  constructor(private http:HttpClient, private router: Router) { }

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
    localStorage.setItem(this.TOKEN_KEY, token);
  }

    getToken(): string {
      return localStorage.getItem(this.TOKEN_KEY) ?? '';
    }
  
    isLoggedIn(): boolean {
      return !!localStorage.getItem('token')
    }
   
    
  
    logout() {
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
    }
    
    
    
}
