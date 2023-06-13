import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import { User, Authority } from '../user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { data, error } from 'jquery';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {
 
  id!:number;


  constructor(private userservice: UserService, private authService: AuthService, 
    private modalService: NgbModal, private router: Router, private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,private toastr: ToastrService) {}
  users: User[] = [];
  user: User = new User();

  ngOnInit(): void {
    this.getusers();
  }
 
  


  private getusers(): void {
    this.userservice.getAllusers().subscribe(
      (users: User[]) => {
        
        this.users = users.map((user: User) => ({
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          password: user.password,
          cin: user.cin,
          partenaire: user.partenaire,
          token: user.token,
          isEnabled: user.desactive,
          desactive:user.desactive,
          authorities: user.authorities.map((authority: Authority) => ({
            authority: authority.authority
          }))
        }));
        console.log(this.users);
      },
      (error: any) => {
        console.error('Failed to fetch users', error);
      }
    );
  }
  

  
  DeleteUser(id :number){
    this.userservice.deleteUser(id).subscribe( 
      data => {
        console.log(data);
        location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
