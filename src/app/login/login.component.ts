import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../services/back-end.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private backEnd: BackEndService) { }

  ngOnInit(): void {
  }

  login(email:HTMLInputElement, password:HTMLInputElement) {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    //console.log(typeof(password.value));

    this.backEnd.login(email.value, password.value).subscribe(data =>{
      console.log(data);
    });

    return false;
  }

}
