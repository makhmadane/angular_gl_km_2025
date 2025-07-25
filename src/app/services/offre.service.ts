import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../models/offre';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  URL = "http://127.0.0.1:8000/api/offre";

  constructor(private httpClient : HttpClient, private auth :AuthService) { }

  getAll(){
      return  this.httpClient.get<Offre[]>(this.URL,{ headers: this.auth.getHeaders() });
  }

  addOffre(offre : Offre){
    return this.httpClient.post<Offre>(this.URL, offre, { headers: this.auth.getHeaders() });
  }
  updateOffre(offre : Offre, id:number){
    return this.httpClient.put<Offre>(this.URL+"/"+id, offre, { headers: this.auth.getHeaders() });
  }
  deleteOffre(id: number){
     return this.httpClient.delete(this.URL+"/"+id,{ headers: this.auth.getHeaders() });
  }
  getById(id: number){
     return this.httpClient.get<Offre>(this.URL+"/"+id,{ headers: this.auth.getHeaders() });
  }

  
  
}

