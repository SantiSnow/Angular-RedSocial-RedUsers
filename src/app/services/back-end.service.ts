import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../models/loginResponse';
import { RegisterResponse } from '../models/registerResponse';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  url:string = "http://127.0.0.1:8000/profile/6";
  loginUrl:string = "http://127.0.0.1:8000/login";
  registerUrl:string = "http://127.0.0.1:8000/register";
  postsUrl:string = "http://127.0.0.1:8000/posts/6";

  constructor(private httpClient: HttpClient) { 

  }

  getPersonas()
  {
    return this.httpClient.get(this.url);
  }

  getPosts()
  {
    return this.httpClient.get(this.postsUrl);
  }

  login(email:string, password:string)
  {
    return this.httpClient.post<LoginResponse>(this.loginUrl, {email: email, password: password});
  }

  register(name:string, email:string, password:string)
  {
    return this.httpClient.post<RegisterResponse>(this.registerUrl, {name: name, email: email, password: password});
  }
}
