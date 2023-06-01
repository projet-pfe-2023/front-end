import { Component } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import Swal from 'sweetalert2';
import { Manifest } from '../manifest';
import { ManifestService } from '../service/manifest.service';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-manifest',
  templateUrl: './form-manifest.component.html',
  styleUrls: ['./form-manifest.component.css'],
  providers: [NgbActiveModal]
})
export class FormManifestComponent {
  manifests: Manifest[] = [];
  manifest: Manifest = new Manifest();
  
  

  constructor(private builder: FormBuilder, private manifestService: ManifestService, 
    private router:Router,private modalService: NgbModal, public modal: NgbActiveModal) { }

  generalform = this.builder.group({
    bureau: this.builder.control('', Validators.required),
    acconsier: this.builder.control('', Validators.required),
    numvoyage: this.builder.control('', Validators.required),
    datedepart: this.builder.control('', Validators.required),
    datearrive: this.builder.control('', Validators.required),
    lieudepart: this.builder.control('', Validators.required),
    destination: this.builder.control('', Validators.required),
    code: this.builder.control('', Validators.required),
    nom: this.builder.control('', Validators.required),
    adresse: this.builder.control('', Validators.required),
    identificationnavire: this.builder.control('', Validators.required),
    paystransporteur: this.builder.control('', Validators.required),
    placetransporteur: this.builder.control('', Validators.required),
    decharger: this.builder.control('', Validators.required),
    nomconducteur: this.builder.control('', Validators.required),
    nomconducteur2: this.builder.control('', Validators.required),
    nomconducteur3: this.builder.control('', Validators.required),
    rerfimmatriculation: this.builder.control('', Validators.required),
    dateimmatriculation: this.builder.control('', Validators.required),
    tonnagebrut: this.builder.control('', Validators.required),
    nembretitre: this.builder.control('', Validators.required),
    nembrecolis: this.builder.control('', Validators.required),
    nembreconteneur: this.builder.control('', Validators.required),
  })
 

  addManifest() {
    this.manifestService.addManifest(this.manifest).subscribe(
      (Response) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'connaissement add successfully',
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/administration-consignateur']);
          }
        });

      },
      (error) => {
        console.error(error);
      });
  }

  

}
