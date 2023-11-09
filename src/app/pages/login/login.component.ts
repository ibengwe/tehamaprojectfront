import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup


  constructor(private route:Router){}

  ngOnInit(): void {
  }

  onClick(){
    this.route.navigateByUrl('home')

  }

}
