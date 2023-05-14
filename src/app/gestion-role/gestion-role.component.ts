import { ChangeDetectorRef, Component, OnInit} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Authority, User } from '../user';
import { error } from 'jquery';


@Component({
  selector: 'app-gestion-role',
  templateUrl: './gestion-role.component.html',
  styleUrls: ['./gestion-role.component.css']
})
export class GestionRoleComponent implements OnInit {
  content: any;
  roles = ['USER', 'ADMIN'];
  newRole = '';
  id!:number;
  isEnabled!:boolean;

 
  constructor(private userservice: UserService, private authService: AuthService, 
    private modalService: NgbModal, private router: Router, private route: ActivatedRoute,
    private cdr: ChangeDetectorRef) {}
  users: User[] = [];
  user: User = new User();

  ngOnInit(): void {
    this.getusers();
    const isEnabled = localStorage.getItem('isEnabled');
  }

  
  openLg(Content: any, user: any) {
    this.modalService.open(Content, { size: 'lg' });
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

  updateActivationStatus(user: any) {
    this.userservice.activateUser(user.id).subscribe(
      (data: any) => {
        console.log('User account activated successfully', data);
        if (data && data.hasOwnProperty('isEnabled')) {
          localStorage.setItem('isEnabled', data['isEnabled'].toString());
        }
        this.getusers(); // Refresh the users array
        this.cdr.detectChanges(); // Trigger change detection
      },
      (error) => {
        console.error('Failed to activate user account:', error);
      }
    );
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
      
    });
   
  } 

}



