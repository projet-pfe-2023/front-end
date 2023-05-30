import {AfterViewInit, Component, ViewChild,ViewEncapsulation } from '@angular/core';
import {Connaissement} from '../connaissement';
import {ConnaissementService} from '../service/connaissement.service' ;
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-connaissement',
  templateUrl: './connaissement.component.html',
  styleUrls: ['./connaissement.component.css']
})
export class ConnaissementComponent {
  connaissements: Connaissement[] = [];
  connaissement: Connaissement = new Connaissement();

  constructor(private modalService: NgbModal,private builder: FormBuilder,private connaissementService: ConnaissementService ) {}

  ngOnInit(): void {
    this.getconnaissements();
  }
  private getconnaissements(): void{
    this.connaissementService.getAllConnaissement().subscribe(
      (connaissements: Connaissement[]) => {
        // Map the returned array of users to the User interface
        this.connaissements = connaissements.map((connaissement: Connaissement) => ({
          id: connaissement.id,
          type: connaissement.type,
          numero: connaissement.numero,
          nature: connaissement.nature,
          lieuchargement: connaissement.lieuchargement,
          lieudechargement: connaissement.lieudechargement,
          colis: connaissement.colis,
          nembre: connaissement.nembre,
          poidbrut: connaissement.poidbrut,
          volume: connaissement.volume
        }));
        console.log(this.connaissements);
      },
      (error: any) => {
        console.error('Failed to fetch users', error);
      }
    );
  }

	openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

  connaissementform=this.builder.group({
    type :this.builder.control('',Validators.required),
    numero :this.builder.control('',Validators.required),
    nature :this.builder.control('',Validators.required),
    lieuchargement :this.builder.control('',Validators.required),
    lieudechargement :this.builder.control('',Validators.required),
    colis :this.builder.control('',Validators.required),
    nembre :this.builder.control('',Validators.required),
    poidbrut :this.builder.control('',Validators.required),
    volume :this.builder.control('',Validators.required),
  })  



 
  ngAfterViewInit() {
    
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

  addConnaissement() {
    this.connaissementService.addConnaissement(this.connaissement).subscribe(
      (Response)=>{
        alert('merch added successfully');
        console.log(Response);
        this.connaissement = { id:0 ,type: '', numero: '',nature:'', lieuchargement:'',lieudechargement:'',colis:0, nembre:0, poidbrut:0, volume:0};
  },
  (error) =>{
    console.error(error);
  });


 }

  }