import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  [x: string]: any;
  constructor(private router:Router,private http: HttpClient,private getdata:DatashareService) { }

  ngOnInit() {
    this.Data()
  }

  list: any = []
  Data(){
     this.http.get<any>("assets/json/eleactrnic.json").subscribe(data => {
       this.list =data
   })
 }
 fruitlist(iod){
   var data=btoa(iod)
   // debugger
     this.getdata.Namedata(data)
  }

}
