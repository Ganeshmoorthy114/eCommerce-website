import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatashareService } from '../service/datashare.service';


@Component({
  selector: 'app-arraival1',
  templateUrl: './arraival1.component.html',
  styleUrls: ['./arraival1.component.css']
})

export class Arraival1Component implements OnInit {
  [x: string]: any;
  constructor(private router:Router,private http: HttpClient,private getdata:DatashareService) {

   }
   ngOnInit() {
    this.Shirts()
    this.Data()

      }
      product: any = []
    
      Shirts(){
        this.http.get<any>("assets/json/fruitdata.json").subscribe(data => {
          this.product =data
      })
    }
    fruit(id){
      var data=btoa(id)
      // debugger
        this.getdata.fruitdata(data)
     }
     
           list: any = []
      Data(){
         this.http.get<any>("assets/json/fruidData.json").subscribe(data => {
           this.list =data
       })
     }
     fruitlist(iod){
       var data=btoa(iod)
       // debugger
         this.getdata.fruitdata(data)
      }

}
