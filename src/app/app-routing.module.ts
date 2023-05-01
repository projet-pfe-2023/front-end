import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AccueilComponent} from './accueil/accueil.component';
import {AdministrationComponent} from './administration/administration.component';
import {GestionUtilisateurComponent} from './gestion-utilisateur/gestion-utilisateur.component';
import {GestionFormulaireComponent} from './gestion-formulaire/gestion-formulaire.component';
import {GestionRoleComponent} from './gestion-role/gestion-role.component';
import {AccueilConsignateurComponent} from './accueil-consignateur/accueil-consignateur.component';
import { AdministrationConsignateurComponent } from './administration-consignateur/administration-consignateur.component';
import {FormManifestComponent} from './form-manifest/form-manifest.component';
import {ConnaissementComponent} from './connaissement/connaissement.component';
import {IntervenantComponent} from './intervenant/intervenant.component';
import {MarchandisesComponent} from './marchandises/marchandises.component';
import {ConteneurComponent} from './conteneur/conteneur.component'
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'administration',component:AdministrationComponent,canActivate:[AuthGuard],
  children:[
    {path:'gestion-utilisateur',component:GestionUtilisateurComponent},
    {path:'gestion-role',component:GestionRoleComponent},
    {path:'gestion-formulaire',component:GestionFormulaireComponent}
  ]},
  {path:'accueil-consignateur',component:AccueilConsignateurComponent},
  {path:'administration-consignateur',component:AdministrationConsignateurComponent,
  children:[
    {path:'form-manifest',component:FormManifestComponent},
    {path:'connaissement',component:ConnaissementComponent},
    {path:'intervenant',component:IntervenantComponent},
    {path:'marchandises',component:MarchandisesComponent},
    {path:'conteneur',component:ConteneurComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
