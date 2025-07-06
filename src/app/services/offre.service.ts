import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../models/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  URL = "http://127.0.0.1:8000/api/offre";

  constructor(private httpClient : HttpClient) { }

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

