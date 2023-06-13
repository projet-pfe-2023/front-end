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
  roles = ['USER', 'ADMIN' ,'DOUANE'];
  newRole = '';
  id!:number;
 

 
  constructor(private userservice: UserService, private authService: AuthService, 
    private modalService: NgbModal, private router: Router, private route: ActivatedRoute,
    private cdr: ChangeDetectorRef) {}
  users: User[] = [];
  user: User = new User();
  
  ngOnInit(): void {
    this.getusers();
    this.fetchUsers();
  }

  fetchUsers() {
    this.userservice. getAllusers().subscribe(
      (users: any[]) => {
        this.users = users;
      },
      error => {
        console.error('Failed to fetch users:', error);
      }
    );
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


  
  activateUser(id: number) {
    this.userservice.activateUser(id).subscribe(
      (data) => {
        console.log('User activated successfully',data);
        this.fetchUsers();
      },
      error => {
        console.error('Failed to activate user:', error);
      }
    );
    
  }
  
  deactivateUser(id: number) {
    this.userservice.deactivateUser(id).subscribe(
      (data) => {
        console.log('User deactivated successfully',data);
        this.fetchUsers();
      },
      error => {
        console.error('Failed to deactivate user:', error);
      }
    );
    
  }
  

  updateRole(user: any) {
    this.userservice.updateUserRole(user.id, this.newRole).subscribe(res => {
      console.log(res);
      this.getusers();
      location.reload();
    },err => {
      console.log(err);
     
    });
    
  } 

}



