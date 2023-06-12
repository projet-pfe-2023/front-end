import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Conteneur } from '../conteneur';
import { ConteneurService } from '../service/conteneur.service';

@Component({
  selector: 'app-conteneur',
  templateUrl: './conteneur.component.html',
  styleUrls: ['./conteneur.component.css']
})
export class ConteneurComponent implements OnInit {
  conteneurs: Conteneur[] = [];
  conteneur: Conteneur = new Conteneur();
  conteneurform!: FormGroup;

  constructor(private modalService: NgbModal, private builder: FormBuilder, private conteneurService: ConteneurService) { }

  ngOnInit(): void {
    this.conteneurform = this.builder.group({
      id: this.builder.control('', Validators.required),
      type: this.builder.control('', Validators.required),
      remp: this.builder.control('', Validators.required),
      scalle: this.builder.control('', Validators.required),
      marque: this.builder.control('', Validators.required),
      resp: this.builder.control('', Validators.required),
    });
    this.getconteneurs();
  }

  private getconteneurs(): void {
    this.conteneurService.getAllConteneur().subscribe(
      (conteneurs: Conteneur[]) => {
        this.conteneurs = conteneurs.map((conteneur: Conteneur) => ({
          id: conteneur.id,
          type: conteneur.type,
          remp: conteneur.remp,
          scalle: conteneur.scalle,
          marque: conteneur.marque,
          resp: conteneur.resp
        }));
        console.log(this.conteneurs);
      },
      (error: any) => {
        console.error('Failed to fetch users', error);
      }
    );
  }

  

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }


  ngAfterViewInit() {

  }


  addConteneur() {
    if(this.conteneurform.valid){
    this.conteneurService.addConteneur(this.conteneur).subscribe(
      (Response) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Enregistrer avec succés',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(Response);
        this.conteneur = { id: 0, type: '', remp: '', scalle: '', marque: '', resp: '' };
      },
      (error) => {
        console.error(error);
      });
    }

  }
}




