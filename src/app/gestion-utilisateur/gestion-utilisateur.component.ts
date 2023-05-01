import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import { User,Authority } from '../user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { error } from 'jquery';



@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {
  content:any;
  anotherContent:any;
  
  constructor(private userservice: UserService,private authService : AuthService,private modalService: NgbModal,private router: Router) { 
    this.content = 'Content for first button';
    this.anotherContent = 'Content for second button';
  }
  users: User[] = [];
  user: User = new User();

  ngOnInit(): void {
    this.getusers();
  }

  openLg(content:any) {
    this.modalService.open(content, { size: 'lg' });
  }
  saveUser(){
    this.authService.addUser(this.user).subscribe(data =>{
      console.log(data);
    },error => console.log(error));  
  }
  onsubmit(){
    console.log(this.user);
    this.saveUser();
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

}
