import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router,Params} from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})


export class CreateUserComponent implements OnInit{
  user: User = new User();
 
  constructor(private authService: AuthService, private router: Router,private route: ActivatedRoute,private userservice: UserService){}

  ngOnInit(): void {
    
  }

  createUser(): void {
    this.authService.addUser(this.user).subscribe(
      (data: User) => {
      console.log(data);
      Swal.fire({
        position: 'top',
        icon: 'success',
        confirmButtonColor: '#25377A',
        title: "Félicitation! Votre utilisateur est créé.",
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['administration/gestion-utilisateur/:id']);
        }
      });
    }, error => console.log(error));
  }
  

  goToUserList() {
    this.router.navigate(['administration/gestion-utilisateur/:id']);
  }
  

}
