import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loadUser() {
    const request = this.http.get<any>("api/user");
    request.subscribe( user => user = user)
  }

  login(loginForm: any) {
    return this.http.post<any>("api/login", loginForm, {withCredentials: true})
    .subscribe(_ => {})
  }

  register(){}
  logout(){}
}
