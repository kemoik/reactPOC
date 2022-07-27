import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {
   information: any =[];
   private patienturl = 'https://ngx.ampath.or.ke/amrs/ws/rest/v1/patient?q=test&v=default&limit=500';
   infourl = 'https://ngx.ampath.or.ke/amrs/ws/rest/v1/patient/'
   httpOptions = {
    headers: new HttpHeaders()
  };
   constructor(private auservice:AuthService,private http: HttpClient,public cookieService:CookieService) { }

  getPatients(data:any){
    const cookieValue = this.cookieService.get("JSESSIONID")
    let auth = this.auservice.getUserCode("username","password");
    let headers = new HttpHeaders({"Authorization":`Basic  ${auth}`});
    // headers = headers.append("Cookie", `${cookieValue}`);
    // headers = headers.append("Authorization",`Basic  ${auth}`)
    return this.http.get(this.patienturl,{headers})
  }
  sendInfo(information:any){
     let queryParams = new HttpParams();
     queryParams = queryParams.append("",this.information);
     console.log(this.information)
     return this.http.get(this.infourl,{
      params:queryParams
    },)
  }

    getCookie(){
    const value = this.cookieService.get('JSESSIONID');
    console.log(value);
  }
}
