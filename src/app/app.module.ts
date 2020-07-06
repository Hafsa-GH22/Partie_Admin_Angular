import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DemandesComponent } from './demandes/demandes.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthentificationService } from './authentification.service';
import { AuthGuardService } from './auth-guard.service';
import { DemandeUserComponent } from './demande-user/demande-user.component';
import { TraiteComponent } from './traite/traite.component';
import { TraiteUserComponent } from './traite-user/traite-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'demandes',
    component: DemandesComponent
  },
  {
    path: 'traite',
    component: TraiteComponent
  },
  {
    path: 'userdem',
    component: DemandeUserComponent
  },
  {
    path: 'usertrait',
    component: TraiteUserComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DemandesComponent,
    ProfileComponent,
    DemandeUserComponent,
    TraiteComponent,
    TraiteUserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthentificationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
