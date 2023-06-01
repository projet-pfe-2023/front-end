import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-consignateur',
  templateUrl: './accueil-consignateur.component.html',
  styleUrls: ['./accueil-consignateur.component.css']
})
export class AccueilConsignateurComponent {

  constructor(private authService: AuthService,private router: Router){}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }
}
