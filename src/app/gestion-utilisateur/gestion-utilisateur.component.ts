import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent  implements AfterViewInit {
  displayedColumns: string[] = ['Identifiant', 'Nom', 'Partenaire','Details'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  closeResult: string|any;
  ELEMENT_DATA = ELEMENT_DATA;

  @ViewChild(MatPaginator) paginator!: MatPaginator  ;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private modalService: NgbModal) {}

  openLg(content:any) {
    this.modalService.open(content, { size: 'lg' });
  }

  simpleAlert(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Activer avec succés',
      showConfirmButton: false,
      timer: 1500
    })
  }

  simpleror(){
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'desactiver avec succés',
      showConfirmButton: false,
      timer: 1500
    })
  }

  errorAlertBox() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Tu es sur?',
      text: "Vous ne pourrez pas inverser cela!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Supprimé!',
          'Démande supprimer.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          'Votre fichier est en sécurité:)',
          'error'
        )
      }
    })
    

}}


export interface PeriodicElement {
  Identifiant: string;
  Nom: string;
  Partenaire: string;
  Email:string;
  CIN:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Identifiant: 'aaaa', Nom: 'Hydrogen', Partenaire: 'aaaa', Email:'aaaa@gmail.com',CIN:'12345678'},
  {Identifiant: 'bbbb', Nom: 'test', Partenaire: 'aaaa',Email:'aaaa@gmail.com',CIN:'12345678'},
  {Identifiant: 'aaaa', Nom: 'Hydrogen', Partenaire: 'aaaa',Email:'aaaa@gmail.com',CIN:'12345678'},
  {Identifiant: 'aaaa', Nom: 'Hydrogen', Partenaire: 'aaaa',Email:'aaaa@gmail.com',CIN:'12345678'},
];









