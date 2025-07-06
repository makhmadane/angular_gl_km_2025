import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Offre } from '../models/offre';
import { OffreService } from '../services/offre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css'
})
export class OffreComponent implements OnInit {

  offres : Offre[] = [];

  constructor(private offreService : OffreService,private route : Router){
     
    
  }
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
   this.offreService.getAll().subscribe(
      (data : Offre[])=>{
        this.offres = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  deleteOffre(id:number){
    this.offreService.deleteOffre(id).subscribe(
      ()=>{ 
        this.getAll();
      },
      (error)=>{
        console.log(error);
      }
    )
  }




}
