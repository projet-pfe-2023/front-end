import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from '../user';
import { data, error } from 'jquery';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private builder: FormBuilder,private authService: AuthService, private router: Router) { 
    sessionStorage.clear();
  }

  loginform = this.builder.group({
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),

  });



  ngOnInit(): void { }

  addlogin() {
    this.authService.login(this.user).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          position: 'top',
          icon: 'success',
          confirmButtonColor: '#25377A',
          title: " Login est correct.",
          showConfirmButton: true,
        })
        this.router.navigateByUrl('/accueil')
      },
      error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
       
        })

      }
    );
  }

}
