import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ManifestService } from '../service/manifest.service';

@Component({
  selector: 'app-accueil-douane',
  templateUrl: './accueil-douane.component.html',
  styleUrls: ['./accueil-douane.component.css']
})
export class AccueilDouaneComponent implements OnInit {
  totalManifest!: number;

  constructor(private authService: AuthService, private router: Router, private manifestservice: ManifestService) { }
  ngOnInit(): void {
    this.manifestservice.getTotalManifest().subscribe(
      total => this.totalManifest = total,
      error => console.log(error)
    );

  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }

  admin() {
    this.router.navigate(['/administration-douane']);
  }

}
