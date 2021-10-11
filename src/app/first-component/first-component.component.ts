import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../services/back-end.service';
import { User } from '../models/user';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  bienvenida: string = "Componente creado con el comando ng generate component";
  user: any;
  posts:any = [];

  constructor(backEnd: BackEndService) { 
    
  }

  ngOnInit(): void {
  }

}
