import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import Swal from 'sweetalert2';
import { Manifest } from '../manifest';
import { ManifestService } from '../service/manifest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';


@Component({
  selector: 'app-form-manifest',
  templateUrl: './form-manifest.component.html',
  styleUrls: ['./form-manifest.component.css'],
  providers: [NgbActiveModal]
})
export class FormManifestComponent implements OnInit {
  manifests: Manifest[] = [];
  manifest: Manifest = new Manifest();
  user: User = new User();
  users: User[] = [];
  generalform!: FormGroup;
  requestBody!: Manifest;
 
  

  constructor(private builder: FormBuilder, private manifestService: ManifestService,
    private router: Router, private modalService: NgbModal, public modal: NgbActiveModal, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    
        
    this.generalform = this.builder.group({
      bureau: this.builder.control('', Validators.required),
      douala: this.builder.control('', Validators.required),
      acconsier: this.builder.control('', Validators.required),
      numvoyage: this.builder.control('', Validators.required),
      datedepart: this.builder.control('', Validators.required),
      datearrive: this.builder.control('', Validators.required),
      lieudepart: this.builder.control('', Validators.required),
      destination: this.builder.control('', Validators.required),
      code: this.builder.control('', Validators.required),
      nom: this.builder.control('', Validators.required),
      adresse: this.builder.control('', Validators.required),
      modetransport: this.builder.control('', Validators.required),
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
    });
  }




  
  addManifest(): void  {
    if (this.generalform.valid) {
      this.manifestService.addManifest(this.manifest).subscribe(
        response => {
            console.log('Manifest added successfully');
            Swal.fire('Success', 'Manifest added successfully', 'success');
            location.reload();
        },
        error => {
          console.error('Failed to add manifest:', error);
          Swal.fire('Error', 'Failed to add manifest', 'error');
        }
      );
    }
  }
  

}




