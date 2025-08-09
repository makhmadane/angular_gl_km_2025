import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../models/offre';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OffreService {
  URL =  environment.apiUrl+"/offre";

  constructor(private httpClient : HttpClient, private auth :AuthService) { }

  getAll(){
      return  this.httpClient.get<Offre[]>(this.URL);
  }

  addOffre(offre : Offre){
    return this.httpClient.post<Offre>(this.URL, offre);
  }
  updateOffre(offre : Offre, id:number){
    return this.httpClient.put<Offre>(this.URL+"/"+id, offre);
  }
  deleteOffre(id: number){
     return this.httpClient.delete(this.URL+"/"+id);
  }
  getById(id: number){
     return this.httpClient.get<Offre>(this.URL+"/"+id);
  }

  
  
}

