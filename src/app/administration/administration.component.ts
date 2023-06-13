import { Component } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { error } from 'jquery';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
})
export class AdministrationComponent  {
  user: User = new User();

  constructor(private authService: AuthService,private router: Router){}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }


  logout(): void {
    this.authService.logout();
  }

  utilisateur(){
    this.router.navigate(['/administration/gestion-utilisateur/:id']);
  }

  role(){
    this.router.navigate(['/administration/gestion-role']);
  }

  accueil(){
    this.router.navigate(['/accueil']);
  }

  
  onCreate(){
    this.router.navigate(['administration/create-user']);
  }
} 
