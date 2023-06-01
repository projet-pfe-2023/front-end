import { Component } from '@angular/core';
import {Manifest} from '../manifest';
import {ManifestService} from '../service/manifest.service' ;
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
  manifests: Manifest[] = [];
  manifest: Manifest = new Manifest();

  constructor(private manifestService: ManifestService,private modalService: NgbModal){}
  openXl(content: any) {
		this.modalService.open(content, { size: 'xl' });
	}
  ngOnInit(): void {
    this.getmanifests();
  }
  private getmanifests(): void{
    this.manifestService.getAllManifest().subscribe(
      (manifests: Manifest[]) => {
        // Map the returned array of users to the User interface
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
}
