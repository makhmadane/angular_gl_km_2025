import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreComponent } from './offre/offre.component';
import { UserComponent } from './user/user.component';
import { AddOffreComponent } from './offre/AddOffre.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  { path: 'offre', component: OffreComponent },
  { path: 'addOffre', component: AddOffreComponent },
  { path: 'updateOffre/:id', component: AddOffreComponent },
  { path: 'login', component: UserComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: OffreComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
