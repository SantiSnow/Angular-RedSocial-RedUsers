import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../models/loginResponse';
import { RegisterResponse } from '../models/registerResponse';
import { User } from '../models/user';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {


  loginUrl:string = "http://127.0.0.1:8000/login";
  registerUrl:string = "http://127.0.0.1:8000/register";
  logoutUrl:string = "http://127.0.0.1:8000/logout";
  postsUrl:string = "http://127.0.0.1:8000/posts";

  createPostUrl:string = "http://127.0.0.1:8000/post";
  deletePostUrl:string = "http://127.0.0.1:8000/post-delete";

  url:string = "http://127.0.0.1:8000/profile";

  constructor(private httpClient: HttpClient) { 

  }

  getProfile(email:string)
  {
    return this.httpClient.post<User>(this.url, {email: email});
  }

  getPosts(email:string)
  {
    return this.httpClient.post<Post[]>(this.postsUrl, {email: email});
  }

  login(email:string, password:string)
  {
    return this.httpClient.post<LoginResponse>(this.loginUrl, {email: email, password: password});
  }

  register(name:string, email:string, password:string)
  {
    return this.httpClient.post<RegisterResponse>(this.registerUrl, {name: name, email: email, password: password});
  }

  logout(email:string, token: string)
  {
    return this.httpClient.post<RegisterResponse>(this.logoutUrl, {email: email, token: token});
  }

  createPost(title: string, description: string, email: string)
  {
    return this.httpClient.post(this.createPostUrl, {email: email, title: title, description: description});
  }

  deletePost(post_id: string)
  {
    return this.httpClient.post(this.deletePostUrl, {post_id: post_id});
  }
}
