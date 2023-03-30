import {AfterViewInit, Component, ViewChild,ViewEncapsulation } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-administration-consignateur',
  templateUrl: './administration-consignateur.component.html',
  styleUrls: ['./administration-consignateur.component.css']
})
export class AdministrationConsignateurComponent {

  closeResult!: string;
  displayedColumns = ['Dossier', 'Voyage', 'Charger', 'Depart','Arrivee','Dated','DateA','Envoyer'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  constructor(private modalService: NgbModal) {}
  openXl(content: any) {
		this.modalService.open(content, { size: 'xl' });
	}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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

  export interface Element {
    Dossier: string;
    Voyage: string;
    Charger: string;
    Depart: string;
    Arrivee: string;
    Dated: string;
    DateA: string;
    Envoyer: string;
  }

  const ELEMENT_DATA: Element[] = [
    { Dossier: 'Hydrogen',Voyage: 'Hydrogen',Charger: 'Hydrogen',Depart: 'Hydrogen',Arrivee: 'Hydrogen',Dated: 'Hydrogen',DateA: 'Hydrogen',Envoyer: 'Hydrogen',}
  ];
  