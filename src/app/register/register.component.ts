import { Component } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private builder: FormBuilder){}

  registerform=this.builder.group({
    identifiant:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    nom:this.builder.control('',Validators.compose([Validators.required,Validators.maxLength(20)])),
    motdepasee:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    cin:this.builder.control('',Validators.compose([Validators.required,Validators.maxLength(8),Validators.minLength(8)])),
    usager:this.builder.control(''),
    paretenaire:this.builder.control(''),
  });

}
