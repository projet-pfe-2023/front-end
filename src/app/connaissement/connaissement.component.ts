import {AfterViewInit, Component, ViewChild,ViewEncapsulation } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-connaissement',
  templateUrl: './connaissement.component.html',
  styleUrls: ['./connaissement.component.css']
})
export class ConnaissementComponent {

  closeResult!: string;
  displayedColumns = ['Code', 'Expediteur', 'Chargement', 'Colis','Etat','Conteneurs'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  constructor(private modalService: NgbModal,private builder: FormBuilder) {}
	openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

  connaissementform=this.builder.group({
    type :this.builder.control('',Validators.required),
    numero :this.builder.control('',Validators.required),
    nature :this.builder.control('',Validators.required),
    lieu :this.builder.control('',Validators.required),
    lieud :this.builder.control('',Validators.required),
    colis :this.builder.control('',Validators.required),
    nembre :this.builder.control('',Validators.required),
    poid :this.builder.control('',Validators.required),
    volume :this.builder.control('',Validators.required),
  })  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
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


  export interface Element {
    Code: string;
    Expediteur: string;
    Chargement: string;
    Colis: string;
    Etat: string;
    Conteneurs: string;
  }

  const ELEMENT_DATA: Element[] = [
    { Code: 'Hydrogen',Expediteur: 'Hydrogen',Chargement: 'Hydrogen',Colis: 'Hydrogen',Etat: 'Hydrogen',Conteneurs: 'Hydrogen', }
  ];
