import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-douane',
  templateUrl: './accueil-douane.component.html',
  styleUrls: ['./accueil-douane.component.css']
})
export class AccueilDouaneComponent {
  
  constructor(private authService: AuthService,private router: Router){}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }

}
