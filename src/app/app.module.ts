import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffreComponent } from './offre/offre.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AddOffreComponent } from './offre/AddOffre.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { tokenInterceptor } from './interceptor/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    UserComponent,
    AddOffreComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
     provideHttpClient(
      withInterceptors([tokenInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
