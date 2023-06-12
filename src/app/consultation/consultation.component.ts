import { Component } from '@angular/core';
import {Manifest} from '../manifest';
import {ManifestService} from '../service/manifest.service' ;
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DouaneService } from '../service/douane.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
  manifests: Manifest[] = [];
  manifest: Manifest = new Manifest();
  isRequestAccepted: boolean = false;
  isRequestRejected: boolean = true;
  manifestId!: number;

  constructor(private manifestService: ManifestService,private modalService: NgbModal,private douaneservice: DouaneService){}
  openXl(content: any) {
		this.modalService.open(content, { size: 'xl' });
	}
  ngOnInit(): void {
    this.getmanifests();
  }
  private getmanifests(): void {
    this.manifestService.getAllManifest().subscribe(
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

  acceptManifest(manifestId: number): void {
    this.douaneservice.acceptManifest(manifestId)
      .subscribe(
        response => {
          console.log('Manifest accepted:', response);
          this.isRequestAccepted = true; 
          location.reload();
        },
        error => {
          console.error('Failed to accept manifest:', error);
        }
      );
  }

  rejectManifest(manifestId: number): void {
    this.douaneservice.rejectManifest(manifestId)
      .subscribe(
        response => {
          console.log('Manifest rejected:', response);
          this.isRequestRejected = false; 
          location.reload();
        },
        error => {
          console.error('Failed to reject manifest:', error);
          
        }
      );
  }


}
