import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Authority, User } from '../user';
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
  desactive:boolean = false ;
  id!: number;
  constructor(private authService: AuthService, private router: Router,private route: ActivatedRoute,
    private userservice: UserService, private cdr: ChangeDetectorRef){}

    user: User = new User();
    users: User[] = [];

    ngOnInit(): void {
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
  
  
  

}
