import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from '../user';
import { data, error } from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User = new User();


  constructor(private builder: FormBuilder , private userService: UserService){}

  loginform = this.builder.group({
    password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),

  });



  ngOnInit(): void {}

  addlogin() {
    this.userService.login(this.user).subscribe(
      response => {
        console.log(response);
        alert("Login successful");
      },
      error => {
        console.log(error);
        alert('login filed');
       
      }


    );
  }

}
