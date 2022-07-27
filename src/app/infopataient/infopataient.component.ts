import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-infopataient',
  templateUrl: './infopataient.component.html',
  styleUrls: ['./infopataient.component.css']
})
export class InfopataientComponent implements OnInit {

  UUID!:string;
  infourl = 'https://ngx.ampath.or.ke/amrs/ws/rest/v1/patient/'
  private patienturl = 'https://ngx.ampath.or.ke/amrs/ws/rest/v1/patient?q=test&v=default&limit=500';

  constructor( private route:ActivatedRoute, private http:HttpClient,private dataService:DataService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.UUID = params['uuid'];
      let ID = this.UUID
      console.log(this.UUID)
    })
  }
  getInformation(){
 
  } 
}
