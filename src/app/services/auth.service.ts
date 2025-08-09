import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { TokenResponse } from '../models/token-response';
import { Register } from '../models/register';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = environment.apiUrl;

  constructor(private http: HttpClient) { }


  login(data: Login) {
    return this.http.post<TokenResponse>(`${this.URL}/login`, data);
  }

  register(data: Register) {
    return this.http.post<TokenResponse>(`${this.URL}/register`, data);
  }

  logOut() {
    return this.http.post(`${this.URL}/logout`, {});
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    return localStorage.removeItem('token');
  }

  getHeaders() {
    return {
      Authorization: 'Bearer ' + this.getToken()
    };
  }
  isAuthenticated(){
    return !!this.getToken();
  }
}
