import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-under',
  templateUrl: './under.component.html',
  styleUrls: ['./under.component.css']
})
export class UnderComponent implements OnInit {
  // [x: string]: any;
  constructor(private router:Router,private http: HttpClient,private getdata:DatashareService) { }

  ngOnInit() {
    this.Data()
  }

  list: any = []
  Data(){
     this.http.get<any>("assets/json/mobile.json").subscribe(data => {
       this.list =data
   })
   let http= this.http.get<any>("").subscribe(data => {
       this.list =data
       console.log(http)
   })
 }
 fruitlist(iod){
   var data=btoa(iod)
   // debugger
     this.getdata.namedata(data)
  }
}
