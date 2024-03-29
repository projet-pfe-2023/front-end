import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ReactiveFormsModule} from '@angular/forms';
import { AdministrationComponent } from './administration/administration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { GestionRoleComponent } from './gestion-role/gestion-role.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AccueilConsignateurComponent } from './accueil-consignateur/accueil-consignateur.component';
import { AdministrationConsignateurComponent } from './administration-consignateur/administration-consignateur.component';
import { FormManifestComponent } from './form-manifest/form-manifest.component';
import { ConnaissementComponent } from './connaissement/connaissement.component';
import { IntervenantComponent } from './intervenant/intervenant.component';
import { MarchandisesComponent } from './marchandises/marchandises.component';
import { ConteneurComponent } from './conteneur/conteneur.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { ToastrModule } from 'ngx-toastr';
import { CreateUserComponent } from './create-user/create-user.component';
import { AccueilDouaneComponent } from './accueil-douane/accueil-douane.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AdministrationDouaneComponent } from './administration-douane/administration-douane.component';

import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccueilComponent,
    AdministrationComponent,
    GestionUtilisateurComponent,
    GestionRoleComponent,
    AccueilConsignateurComponent,
    AdministrationConsignateurComponent,
    FormManifestComponent,
    ConnaissementComponent,
    IntervenantComponent,
    MarchandisesComponent,
    ConteneurComponent,
    CreateUserComponent,
    AccueilDouaneComponent,
    ConsultationComponent,
    AdministrationDouaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      },
    }),
    
   ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      
    },
    allowedDomains: ['localhost:4200'],
    
  };
}