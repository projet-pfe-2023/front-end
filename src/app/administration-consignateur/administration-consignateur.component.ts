import {  Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Manifest } from '../manifest';
import { ManifestService } from '../service/manifest.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-administration-consignateur',
  templateUrl: './administration-consignateur.component.html',
  styleUrls: ['./administration-consignateur.component.css']
})
export class AdministrationConsignateurComponent {
  manifests: Manifest[] = [];
  manifest: Manifest = new Manifest();
  isRequestAccepted: boolean = false;
  manifestId!: number;
  updatedManifest!: Manifest;
  generalform!: FormGroup;
  responseMessage!: string;
  id!: number;
  

  constructor(private modalService: NgbModal, private manifestService: ManifestService,private router:Router,private builder: FormBuilder) { }
  openXl(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }
  open(manifestmodal: any) {
    this.modalService.open(manifestmodal, { size: 'xl' });
  }
  openLg(Contentupdate: any,index: number) {
    if (index >= 0 && index < this.manifests.length) {
      this.manifest = this.manifests[index];
      this.modalService.open(Contentupdate, { size: 'lg' });
    } else {
      
      console.error('Invalid index or manifests array is empty');
    }
    
  }


  ngOnInit(): void {
    this.getmanifests();

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
  

   getmanifests():void {
    this.manifestService.getManifestsForUser().subscribe(
      (manifests: Manifest[]) => {
        this.manifests = manifests.map((manifest: Manifest) => ({
          id: manifest.id,
          bureau: manifest.bureau,
          douala: manifest.douala,
          acconsier: manifest.acconsier,
          numvoyage: manifest.numvoyage,
          datedepart: manifest.datedepart,
          datearrive: manifest.datearrive,
          lieudepart: manifest.lieudepart,
          destination: manifest.destination,
          code: manifest.code,
          nom: manifest.nom,
          adresse: manifest.adresse,
          modetransport: manifest.modetransport,
          identificationnavire: manifest.identificationnavire,
          paystransporteur: manifest.paystransporteur,
          placetransporteur: manifest.placetransporteur,
          decharger: manifest.decharger,
          nomconducteur: manifest.nomconducteur,
          nomconducteur2: manifest.nomconducteur2,
          nomconducteur3: manifest.nomconducteur3,
          rerfimmatriculation: manifest.rerfimmatriculation,
          dateimmatriculation: manifest.dateimmatriculation,
          tonnagebrut: manifest.tonnagebrut,
          nembretitre: manifest.nembretitre,
          nembrecolis: manifest.nembrecolis,
          nembreconteneur: manifest.nembreconteneur,
          status: manifest.status,
          user: manifest.user,
          
        }));
        console.log(this.manifests);
      },
      (error: any) => {
        console.error('Failed to fetch users', error);
      }
    );
  }

  

  myFunction() {
    (async () => {
      const { value: file } = await Swal.fire({
        title: 'Select Manifest',
        input: 'file',
        inputAttributes: {
          'accept': '*',
          'aria-label': 'Upload your Manifest'
        }
      })

      if (file && file.type === 'application/pdf') {
        const reader = new FileReader()
        reader.onload = (e: any) => {
          Swal.fire({
            title: 'le Manifest selectionner',
            html: `<embed src="${e.target.result}" width="100%" height="600px" />`
          })
        }
        reader.readAsDataURL(file)
      }
    })()
  }
  accueil() {
    this.router.navigate(['/accueil-consignateur'])
  }

  
  

  demandeModification(manifestId: number): void {
    this.manifestService.demandeModification(manifestId).subscribe(
      response => {
        console.log('Manifest pending:', response);
        this.isRequestAccepted = true; 
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'envoyer demande',
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
        
      },
      error => {
        console.error('Failed to pending manifest:', error);
      }
    );

  }

  updateManifest(id: number): void {
    const requestBody: Manifest = {
      id: this.manifest.id,
      bureau: this.manifest.bureau,
      douala: this.manifest.douala,
      acconsier: this.manifest.acconsier,
      numvoyage: this.manifest.numvoyage,
      datedepart: this.manifest.datedepart,
      datearrive: this.manifest.datearrive,
      lieudepart: this.manifest.lieudepart,
      destination: this.manifest.destination,
      code: this.manifest.code,
      nom: this.manifest.nom,
      adresse: this.manifest.adresse,
      modetransport: this.manifest.modetransport,
      identificationnavire: this.manifest.identificationnavire,
      paystransporteur: this.manifest.paystransporteur,
      placetransporteur: this.manifest.placetransporteur,
      decharger: this.manifest.decharger,
      nomconducteur: this.manifest.nomconducteur,
      nomconducteur2: this.manifest.nomconducteur2,
      nomconducteur3: this.manifest.nomconducteur3,
      rerfimmatriculation: this.manifest.rerfimmatriculation,
      dateimmatriculation: this.manifest.dateimmatriculation,
      tonnagebrut: this.manifest.tonnagebrut,
      nembretitre: this.manifest.nembretitre,
      nembrecolis: this.manifest.nembrecolis,
      nembreconteneur: this.manifest.nembreconteneur,
      status: this.manifest.status,
      user:this.manifest.user,
      
    };
    this.manifestService.updateManifest(id, requestBody).subscribe(
      (requestBody) => {
        console.log('Manifest updated successfully:', requestBody);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'The change has been successful',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error) => {
        console.error('Failed to update manifest:', error);
       
      }
    );
  }

 

}
