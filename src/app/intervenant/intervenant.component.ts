import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-intervenant',
  templateUrl: './intervenant.component.html',
  styleUrls: ['./intervenant.component.css']
})
export class IntervenantComponent {
  constructor(private builder: FormBuilder) {}

  intervenantform=this.builder.group({
    nome :this.builder.control('',Validators.required),
    adresse :this.builder.control('',Validators.required),
    numerocontribuable :this.builder.control('',Validators.required),
    nomd :this.builder.control('',Validators.required),
    telephone :this.builder.control('',Validators.required),
    email :this.builder.control('',Validators.required),
    adressed :this.builder.control('',Validators.required),
  })

  simpleAlert(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Enregistrer avec succés',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
