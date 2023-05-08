import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',    
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  
  user: any; 
  
  constructor(private route: ActivatedRoute, private userservice: UserService,private router: Router) { }

  ngOnInit(): void {
    this.user = this.userservice.getAllusers();
  }
  

}
