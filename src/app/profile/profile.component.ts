import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { User } from '../models/user';
import { BackEndService } from '../services/back-end.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email:string;
  token:string;
  user!: User;
  posts!: Post[];
  
  constructor(private backEnd:BackEndService, private router:Router) {
    this.email = (localStorage.getItem('user') || '{}');
    this.token = (localStorage.getItem('token') || '{}');

    if(this.email == "{}" || this.token == "{}"){
      this.router.navigate(['Login']);
    }

    this.backEnd.getProfile(this.email).subscribe(
      res=>{
        console.log(res);
        this.user = res;
      },
      err=>{
        console.log(err);
      }
    );
    
    this.backEnd.getPosts(this.email).subscribe(
      res=>{
        console.log(res);
        this.posts = res;
      },
      err=>{
        console.log(err);
      }
    );
  }

  crearPost(){

  }

  logout()
  {
    console.log(this.email);
    this.backEnd.logout(this.email, this.token).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['Login']);
      }
    );
  }

  createPost(title:HTMLInputElement, description:HTMLInputElement){
    this.backEnd.createPost(title.value, description.value, this.email).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['Profile']);
      }
    );
  }

  deletePost(post_id:HTMLInputElement){
    this.backEnd.deletePost(post_id.value).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['Profile']);
      }
    );
    return false;
  }

  ngOnInit(): void {
  }

}
