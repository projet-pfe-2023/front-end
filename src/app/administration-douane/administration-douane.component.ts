import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-administration-douane',
  templateUrl: './administration-douane.component.html',
  styleUrls: ['./administration-douane.component.css']
})
export class AdministrationDouaneComponent {

  constructor(private authService: AuthService,private router: Router){}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }


  logout(): void {
    this.authService.logout();
  }

  consultation(){
    this.router.navigate(['administration-douane/consultation']);
  }
  douane(){
    this.router.navigate(['/accueil-douane']);
  }

}
