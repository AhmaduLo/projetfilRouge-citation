import { AcceuilComponent } from './acceuil/acceuil.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { HeaderComponent } from './header/header.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  
  {
    path: '', canActivate:[AuthGuardGuard],
    component: HeaderComponent,
    children: [ 
      { path: 'acceuil', component: AcceuilComponent },
      { path: 'read', component: ReadComponent },
      { path: 'profil/:id', component: ProfilComponent },
      { path: 'update/:id', component: UpdateComponent },
      { path:'**', redirectTo:'/'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
