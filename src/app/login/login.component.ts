import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/loginResponse';
import { BackEndService } from '../services/back-end.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errosDisplay: boolean= true;

    constructor(private backEnd: BackEndService, 
      private routing: Router) { }

  ngOnInit(): void {
  }

  login(email:HTMLInputElement, password:HTMLInputElement) {
    this.backEnd.login(email.value, password.value).subscribe(
      res=>{
        if(res.Status === "Session Started"){
          this.routing.navigate(['']);
        }
        else{
          this.errosDisplay = false;
        }
      },
      err=>{
        console.log(err);
      }
    );

    return false;
  }

}
