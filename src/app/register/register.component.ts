import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { User } from '../user';
import { error } from 'jquery';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';




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
      password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
      email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
      cin: this.builder.control('', Validators.compose([Validators.required, Validators.maxLength(8), Validators.minLength(8)])),
      usager: this.builder.control(''),
      partenaire: this.builder.control('',Validators.compose([Validators.required])),
  
    });
  }

  addUser() {
    this.authService.addUser(this.user).subscribe((Response) => {
        alert('User added successfully');
        console.log(Response);
        this.user = new User();
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
        alert('wrong!');
        
      });
  }

}

