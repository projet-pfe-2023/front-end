import { Component } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-manifest',
  templateUrl: './form-manifest.component.html',
  styleUrls: ['./form-manifest.component.css']
})
export class FormManifestComponent {
  constructor(private builder: FormBuilder){}

  generalform=this.builder.group({
    bureau :this.builder.control('',Validators.required),
    acconsier :this.builder.control('',Validators.required),
    numvoyage :this.builder.control('',Validators.required),
    heurearrivee :this.builder.control('',Validators.required),
    datedepart :this.builder.control('',Validators.required),
    datearrivee :this.builder.control('',Validators.required),
    lieudepart :this.builder.control('',Validators.required),
    destination :this.builder.control('',Validators.required),
    code :this.builder.control('',Validators.required),
    nom :this.builder.control('',Validators.required),
    adresse :this.builder.control('',Validators.required),
    idnavire :this.builder.control('',Validators.required),
    paystransporteur :this.builder.control('',Validators.required),
    placetransporteur :this.builder.control('',Validators.required),
    datedechargement :this.builder.control('',Validators.required),
    conducteur1 :this.builder.control('',Validators.required),
    conducteur2 :this.builder.control('',Validators.required),
    conducteur3 :this.builder.control('',Validators.required),
    refimmatricule :this.builder.control('',Validators.required),
    dateimmatricule :this.builder.control('',Validators.required),
    tonnagebrut :this.builder.control('',Validators.required),
    nombretitre :this.builder.control('',Validators.required),
    nombrecolis :this.builder.control('',Validators.required),
    nombrecontenneurs :this.builder.control('',Validators.required),
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
