import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, } from '@angular/forms';
import { Merch } from '../merch';
import { MerchService } from '../service/merch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marchandises',
  templateUrl: './marchandises.component.html',
  styleUrls: ['./marchandises.component.css']
})
export class MarchandisesComponent implements OnInit {
  merchs: Merch[] = [];
  merch: Merch = new Merch();
  merchform: any;

  constructor(private modalService: NgbModal, private builder: FormBuilder, private merchService: MerchService,private router: Router) { }

  ngOnInit(): void {

    this.merchform = this.builder.group({
      marque: this.builder.control('', Validators.required),
      mass: this.builder.control('', Validators.required),
      volume: this.builder.control('', Validators.required),
      designation: this.builder.control('', Validators.required),
    })

    this.getmerchs();
  }
  private getmerchs(): void {
    this.merchService.getAllMerch().subscribe(
      (merchs: Merch[]) => {
       
        this.merchs = merchs.map((merch: Merch) => ({
          id: merch.id,
          marque: merch.marque,
          mass: merch.mass,
          volume: merch.volume,
          designation: merch.designation
        }));
        console.log(this.merchs);
      },
      (error: any) => {
        console.error('Failed to fetch users', error);
      }
    );
  }



  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }


  addMerch() {
    this.merchService.addMerch(this.merch).subscribe(
      (Response) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Enregistrer avec succés',
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['administration-consignateur/marchandises']);
          }
        });
        console.log(Response);
        this.merch = { id: 0, marque: '', mass: 0, volume: 0, designation: '' };
        
      },
      (error) => {
        console.error(error);
      });


  }
}
