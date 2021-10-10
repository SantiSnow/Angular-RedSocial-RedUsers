import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../services/back-end.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private backEnd:BackEndService) { }

  ngOnInit(): void {
  }

  register(name:HTMLInputElement, email:HTMLInputElement, password:HTMLInputElement){
    console.log(`Nombre: ${name.value}, Email: ${email.value}, Password: ${password.value}`);

    this.backEnd.register(name.value, email.value, password.value).subscribe(data =>{
      console.log(data);
    });

    return false;
  }
}
