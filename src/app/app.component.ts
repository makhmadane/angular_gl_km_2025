import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'L3GL';
 offres: string[] = [];
  //Injection Dependance
  constructor(private auth : AuthService, private router:Router){
    
  }
  //Constructeur
  ngOnInit(): void {

  }

  isAuthenticated(){
    return this.auth.isAuthenticated();
  }

  logOut(){
    this.auth.logOut().subscribe(
      ()=>{
          this.auth.removeToken();
          this.router.navigateByUrl("login");
      }
    )
  }

}
