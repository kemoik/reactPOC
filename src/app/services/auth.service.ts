import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://ngx.ampath.or.ke/amrs/ws/rest/v1/session'
   httpOptions = {
    headers: new HttpHeaders()
  };
  private patienturl = 'https://ngx.ampath.or.ke/amrs/ws/rest/v1/patient?q=test&v=default&limit=500';
  constructor(private http:HttpClient, private cookieService: CookieService ){

  }
  proceedLogin(username:string,password:string){
    let headers = new HttpHeaders();
    const base64 = btoa(username + ':' + password);
    headers = headers.append('Authorization', 'Basic ' + base64);
    return this.http.get(this.baseUrl,{headers:headers})

  }
  getUserCode(username:string,password:string){
    return  btoa(username + ':' + password);
  }

  

}
