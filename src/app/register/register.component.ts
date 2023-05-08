import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { User } from '../user';
import { error } from 'jquery';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  registerform!: FormGroup ;

  constructor(private builder: FormBuilder, private authService : AuthService, private router: Router) { }

  ngOnInit(): void { 
    this.registerform = this.builder.group({
      identifiant: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
      firstname: this.builder.control('', Validators.compose([Validators.required, Validators.maxLength(20)])),
      lastname: this.builder.control('', Validators.compose([Validators.required, Validators.maxLength(20)])),
      password: this.builder.control(null, [Validators.minLength(6), Validators.required]),
      email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
      cin: this.builder.control('', Validators.compose([Validators.required, Validators.maxLength(8), Validators.minLength(8)])),
      usager: this.builder.control(''),
      partenaire: this.builder.control('',Validators.compose([Validators.required])),
  
    });
  }

  addUser() {
    this.authService.addUser(this.user).subscribe((Response) => {
      console.log(Response);
        this.user = new User();
        Swal.fire({
        position: 'top',
        icon: 'success',
        confirmButtonColor: '#25377A',
        title: "Félicitation! Votre inscription est réussie.",
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
        }
      });
        
      },
      (error) => {
        console.error(error);
        alert('wrong!');
        
      });
  }

}

