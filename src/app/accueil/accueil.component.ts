import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',    
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  
  user: any; 
  
  constructor(private route: ActivatedRoute, private userservice: UserService,private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.userservice.getAllusers();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }
  

}
