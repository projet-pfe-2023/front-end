import {AfterViewInit, Component, ViewChild,ViewEncapsulation } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-marchandises',
  templateUrl: './marchandises.component.html',
  styleUrls: ['./marchandises.component.css']
})
export class MarchandisesComponent  {

  closeResult!: string;
  displayedColumns = ['Marque', 'Poids', 'Volume', 'Designation1'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  constructor(private modalService: NgbModal,private builder: FormBuilder) {}
  marchandisesform=this.builder.group({
    marque :this.builder.control('',Validators.required),
    poid :this.builder.control('',Validators.required),
    volume :this.builder.control('',Validators.required),
    designation :this.builder.control('',Validators.required),
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
    Marque: string;
    Poids: string;
    Volume: string;
    Designation1: string;

  }

  const ELEMENT_DATA: Element[] = [
    { Marque: 'Hydrogen',Poids: 'Hydrogen',Volume: 'Hydrogen',Designation1: 'Hydrogen' }
  ];
