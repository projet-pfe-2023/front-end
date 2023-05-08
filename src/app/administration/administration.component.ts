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

  isLoggout(){
    this.authService.logout().subscribe(
      data =>{
        console.log(data);
        this.authService.clearToken();
        Swal.fire({
          position: 'top',
          icon: 'success',
          confirmButtonColor: '#25377A',
          title: "please connect again.",
          showConfirmButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/login']);
          }
        });
      },
      (error) =>{
        console.log(error);
      }
      );
  }

} 
