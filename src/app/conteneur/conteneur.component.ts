import {AfterViewInit, Component, ViewChild,ViewEncapsulation } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-conteneur',
  templateUrl: './conteneur.component.html',
  styleUrls: ['./conteneur.component.css']
})
export class ConteneurComponent {

  closeResult!: string;
  displayedColumns = ['Identification', 'Type', 'Remp', 'Scelles','Marque','Resp'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  constructor(private modalService: NgbModal,private builder: FormBuilder) {}
  conteneurform=this.builder.group({
    identification :this.builder.control('',Validators.required),
    type :this.builder.control('',Validators.required),
    remp :this.builder.control('',Validators.required),
    scelles :this.builder.control('',Validators.required),
    marque :this.builder.control('',Validators.required),
    resp :this.builder.control('',Validators.required),
  })

	openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}
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
    Identification: string;
    Type: string;
    Remp: string;
    Scelles: string;
    Marque: string;
    Resp: string;

  }

  const ELEMENT_DATA: Element[] = [
    { Identification: 'Hydrogen',Type: 'Hydrogen',Remp: 'Hydrogen',Scelles: 'Hydrogen',Marque:'hhh',Resp:'ggg' }
  ];

