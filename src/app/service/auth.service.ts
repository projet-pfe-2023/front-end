import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ERole } from '../enums/erole';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'token';
  private apiURL = "http://localhost:8080/api/test/auth";


  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) {
    this.jwtHelper = new JwtHelperService();
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL + "/register", user)
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL + "/authenticate", user)
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

  getUserRole(): ERole[] {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);

      if (decodedToken && decodedToken.role) {
        if (Array.isArray(decodedToken.role)) {
          return decodedToken.role as ERole[]; 
        } else {
          return [decodedToken.role as ERole]; 
        }
      }
    }

    
    return [];
  }

}