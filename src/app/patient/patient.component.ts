import { Component, OnInit ,ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: any =[];
  dataSource! :MatTableDataSource<any>
  filterTerm: any;
  searchTerm:any;
  tittle = 'paginate'
  displayColumn: string[] =['Identifier', 'Name','Age' , 'Gender' , 'Birthdate' , 'DeathDate'];
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatPaginator
  page: number = 1;
  count: number = 0;
  tableSize: number =10;
  tableSizes: any = [5,10,15,20]

     constructor(private dataService: DataService, private route:Router, private router: ActivatedRoute) { }

  ngOnInit(): void {

  }
  onSubmit(){
   this.dataService.getPatients(this.searchTerm).subscribe((res:any)=>{
    if(res){
    this.patients= res.results
    const ID = res.results.uuid;
    this.dataSource = new MatTableDataSource(this.patients)
    this.dataSource.paginator = this.paginator
    this.dataSource.paginator = this.paginator
    console.log(res)
   
    }
   })
  }
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter =filterValue.trim().toLowerCase()

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }
  displayInfo(patientUUID:String){
    this.route.navigate ([ '/infos'] , {queryParams: {uuid:patientUUID}})
  }
}
