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
  totalUsers!: number;
  user: any; 
  
  constructor(private route: ActivatedRoute, private userservice: UserService,private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.user = this.userservice.getAllusers();
    this.userservice.getTotalUsers().subscribe(
      total => this.totalUsers = total,
      error => console.log(error)
    );
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }
  

}
