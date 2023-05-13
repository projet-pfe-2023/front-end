import { Component } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
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
} 
