import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private cookieservice:CookieService,private auservice: AuthService) { }

  ngOnInit(): void {
  }
  checkloggedin(){
   this.cookieservice.get('JSESSIONID')
  }
  // onLogout(){
  //  this.auservice.logoutUser
  // }
}
