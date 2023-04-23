import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../service/user.service';
import { error } from 'jquery';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user: User = new User();

  constructor(private builder: FormBuilder, private userservice:UserService){}

  registerform=this.builder.group({
    identifiant:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    firstname:this.builder.control('',Validators.compose([Validators.required,Validators.maxLength(20)])),
    lastname:this.builder.control('',Validators.compose([Validators.required,Validators.maxLength(20)])),
    password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    cpassword:this.builder.control('',Validators.compose([Validators.required,])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    cin:this.builder.control('',Validators.compose([Validators.required,Validators.maxLength(8),Validators.minLength(8)])),
    usager:this.builder.control(''),
    paretenaire:this.builder.control(''),
    
  });

  

  ngOnInit(): void {}

  addUser() {
    this.userservice.addUser(this.user).subscribe(
      (Response)=>{
        alert('User added successfully');
        console.log(Response);
        this.user = { id:10 ,firstname: '',lastname: '', email: '',password:'',cin:0 };
  },
  (error) =>{
    console.error(error);
    alert('wrong!');
  });
    
}

}

