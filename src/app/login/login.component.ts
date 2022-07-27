import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 form:any = {
  username:null,
  password:null
 }
 isLoggedIn = false;
 isLoginFailed = false;
 errorMessage = '';

 constructor(private auservice: AuthService, private route:Router,private cookieService:CookieService){}


  ngOnInit(): void {
  }
  loginUser(){
   const {username,password} = this.form
   this.auservice.proceedLogin(username,password).subscribe((result:any)=>{ {
      this.cookieService.set('JSESSIONID', result.sessionId);
     
      this.isLoginFailed =false;
      this.isLoggedIn= true;
      if(result.authenticated === true){
        this.route.navigate ([ '/welcome'])
      }else{
         
      }
  
    }
 
   })
  }
  afterlogin(){

  }
  getCookie(){
    const value = this.cookieService.get('JSESSIONID');
    console.log(value);
  }


}
