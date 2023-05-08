import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import { User, Authority } from '../user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { error } from 'jquery';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {
  content: any;
  anotherContent: any;
  roles = ['USER', 'ADMIN'];
  newRole = '';
  id!:number;


  constructor(private userservice: UserService, private authService: AuthService, 
    private modalService: NgbModal, private router: Router, private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,private toastr: ToastrService) {
    this.content = 'Content for first button';
    this.anotherContent = 'Content for second button';
  }
  users: User[] = [];
  user: User = new User();

  ngOnInit(): void {
    this.getusers();
  }
  updateRole(user: any) {
    this.userservice.updateUserRole(user.id, this.newRole).subscribe(res => {
      console.log(res);
      user.isEnabled = true;
      this.getusers();
      Swal.fire({
        position: 'top',
        icon: 'success',
        confirmButtonColor: '#25377A',
        title: "Félicitation! Votre Role est modifier.",
        showConfirmButton: true,
      })
    },err => {
      console.log(err);
      this.toastr.error("Failed to update role!");
    });
   
  }
  

  openLg(anotherContent: any, user: any) {
    this.modalService.open(anotherContent, { size: 'lg' });
    this.user = user;
  }


  private getusers(): void {
    this.userservice.getAllusers().subscribe(
      (users: User[]) => {
        // Map the returned array of users to the User interface
        this.users = users.map((user: User) => ({
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          password: user.password,
          cin: user.cin,
          partenaire: user.partenaire,
          token: user.token,
          isEnabled: user.isEnabled,
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

  onCreate(){
    this.router.navigate(['administration/create-user']);
  }

}
