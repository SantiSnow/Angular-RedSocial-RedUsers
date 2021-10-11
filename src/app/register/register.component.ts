import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackEndService } from '../services/back-end.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorsDisplay:boolean = true;
  emailExistenteDisplay:boolean= true;

  constructor(private backEnd:BackEndService, private router:Router) { }

  ngOnInit(): void {
  }

  register(name:HTMLInputElement, email:HTMLInputElement, password:HTMLInputElement){
    this.errorsDisplay = true;
    this.emailExistenteDisplay = true;

    this.backEnd.register(name.value, email.value, password.value).subscribe(
      res=>{
        if(res.Status === "User already exists"){
          this.emailExistenteDisplay = false;
        }
        else if (res.Status === "User registered") {
          localStorage.setItem('user', email.value);
          localStorage.setItem('token', res.Token);
          this.router.navigate(['Profile']);
        }
      },
      err=>{
        console.log(err);
        this.errorsDisplay = false;
      }
    );

    return false;
  }
}
