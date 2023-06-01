import {AfterViewInit, Component, ViewChild,ViewEncapsulation } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import {Manifest} from '../manifest';
import {ManifestService} from '../service/manifest.service' ;

@Component({
  selector: 'app-administration-consignateur',
  templateUrl: './administration-consignateur.component.html',
  styleUrls: ['./administration-consignateur.component.css']
})
export class AdministrationConsignateurComponent {
  manifests: Manifest[] = [];
  manifest: Manifest = new Manifest();
  
  constructor(private modalService: NgbModal,private manifestService: ManifestService) {}
  openXl(content: any) {
		this.modalService.open(content, { size: 'xl' });
	}
  open(manifestmodal: any) {
		this.modalService.open(manifestmodal, { size: 'xl' });
	}
  ngOnInit(): void {
    this.getmanifests();
  }
  private getmanifests(): void{
    this.manifestService.getAllManifest().subscribe(
      (manifests: Manifest[]) => {
        this.manifests = manifests.map((manifest: Manifest) => ({
          id: manifest.id,
          bureau: manifest.bureau,
          douala: manifest.douala,
          acconsier: manifest.acconsier,
          numvoyage: manifest.numvoyage,
          heurearrive: manifest.heurearrive,
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

  }

