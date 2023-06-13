import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AccueilComponent} from './accueil/accueil.component';
import {AdministrationComponent} from './administration/administration.component';
import {GestionUtilisateurComponent} from './gestion-utilisateur/gestion-utilisateur.component';
import {GestionRoleComponent} from './gestion-role/gestion-role.component';
import {AccueilConsignateurComponent} from './accueil-consignateur/accueil-consignateur.component';
import { AdministrationConsignateurComponent } from './administration-consignateur/administration-consignateur.component';
import {FormManifestComponent} from './form-manifest/form-manifest.component';
import {ConnaissementComponent} from './connaissement/connaissement.component';
import {IntervenantComponent} from './intervenant/intervenant.component';
import {MarchandisesComponent} from './marchandises/marchandises.component';
import {ConteneurComponent} from './conteneur/conteneur.component'
import { AuthGuard } from './guard/auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import {AccueilDouaneComponent} from './accueil-douane/accueil-douane.component';
import {ConsultationComponent} from './consultation/consultation.component';
import {AdministrationDouaneComponent} from './administration-douane/administration-douane.component'; 
import { ERole } from './enums/erole';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'accueil',component:AccueilComponent,canActivate:[AuthGuard]}, 
  {path:'administration',component:AdministrationComponent,canActivate:[AuthGuard],
  children:[
    {path:'gestion-utilisateur/:id',component:GestionUtilisateurComponent,canActivate:[AuthGuard]},
    {path:'gestion-role',component:GestionRoleComponent,canActivate:[AuthGuard]},
    {path: 'create-user', component:CreateUserComponent,canActivate:[AuthGuard]},  
  ]},
  {path:'accueil-consignateur',component:AccueilConsignateurComponent,canActivate:[AuthGuard]},
  {path:'administration-consignateur',component:AdministrationConsignateurComponent,canActivate:[AuthGuard],
  children:[
    {path:'form-manifest',component:FormManifestComponent,canActivate:[AuthGuard]},
    {path:'connaissement',component:ConnaissementComponent,canActivate:[AuthGuard]},
    {path:'intervenant',component:IntervenantComponent,canActivate:[AuthGuard]},
    {path:'marchandises',component:MarchandisesComponent,canActivate:[AuthGuard]},
    {path:'conteneur',component:ConteneurComponent,canActivate:[AuthGuard]}
  ]},
  {path:'accueil-douane',component:AccueilDouaneComponent,canActivate:[AuthGuard]},
  {path:'administration-douane',component:AdministrationDouaneComponent,canActivate:[AuthGuard],
  children:[
    {path:'consultation',component:ConsultationComponent,canActivate:[AuthGuard]},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
