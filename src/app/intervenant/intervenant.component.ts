import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, } from '@angular/forms';
import { Intervenant } from '../intervenant';
import { IntervenantService } from '../service/intervenant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-intervenant',
  templateUrl: './intervenant.component.html',
  styleUrls: ['./intervenant.component.css']
})
export class IntervenantComponent {
  intervenants: Intervenant[] = [];
  intervenant: Intervenant = new Intervenant();
  intervenantform: any;

  constructor(private builder: FormBuilder, private intervenantService: IntervenantService, private modalService: NgbModal) { }
  ngOnInit(): void {
    this.intervenantform = this.builder.group({
      nom: this.builder.control('', Validators.required),
      adresse: this.builder.control('', Validators.required),
      numerocontribuable: this.builder.control('', Validators.required),
      nom2: this.builder.control('', Validators.required),
      telephone: this.builder.control('', Validators.required),
      email: this.builder.control('', Validators.required),
      adresse2: this.builder.control('', Validators.required),
    });
    this.getintervenants();
  }

  private getintervenants(): void {
    this.intervenantService.getAllIntervenant().subscribe(
      (intervenants: Intervenant[]) => {
        this.intervenants = intervenants.map((intervenant: Intervenant) => ({
          id: intervenant.id,
          nom: intervenant.nom,
          adresse: intervenant.adresse,
          numerocontribuable: intervenant.numerocontribuable,
          nom2: intervenant.nom2,
          telephone: intervenant.telephone,
          adresse2: intervenant.adresse2,
          email: intervenant.email,
        }));
        console.log(this.intervenants);
      },
      (error: any) => {
        console.error('Failed to fetch users', error);
      }
    );
  }



  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }



  addIntervenant() {
    if(this.intervenantform.valid){
    this.intervenantService.addIntervenant(this.intervenant).subscribe(
      (Response) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'intervenant add successfully',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(Response);
        this.intervenant = { id: 0, nom: '', adresse: '', numerocontribuable: '', nom2: '', telephone: 0, email: '', adresse2: '', };
      },
      (error) => {
        console.error(error);
      });
    }

  }

}
