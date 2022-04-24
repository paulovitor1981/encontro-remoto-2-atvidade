import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    private usuario: User = new User;
  login: any;

  constructor(private Ngform: NgForm){}
   ngOnInit(): void {
     
   }
  fazerlogin(){
  
   this.login.service.login(this.usuario);
  }}
