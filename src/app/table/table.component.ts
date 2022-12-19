import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  setData: any=[]
  list: any;
  Total:number=0;
  Gst:any=30;
  TotalPrice:number=0
  constructor(private http: HttpClient, private fb: FormBuilder,
    private getdata: DatashareService,
     private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let parse=JSON.parse(localStorage.getItem("fruits"))
    if(parse!=null){
      this.setData=parse
    }
    else{
      this.setData=[]
    }
    this.in()
  }
  removeData(i){
    this.setData.splice(i,1)
    var data=JSON.stringify(this.setData)
    localStorage.setItem("fruits",data)
  }
  value:any
  in(){
    this.Total=0;
    this.TotalPrice=0;
    for (let i = 0; i < this.setData.length; i++) {
     this.value=this.setData[i]
     this.Total+=this.setData[i].totalprice   
     this.TotalPrice=this.Total+(this.Gst)


    }
  }

  incresae(count,i){
    this.setData[i].totalprice=this.setData[i].price*(count+1)
    this.setData[i].count=count+1
    var data=JSON.stringify(this.setData)
    localStorage.setItem("Customer",data)

    }
    decresae(count,i){
      if(count>1){
        this.setData[i].totalprice=this.setData[i].price*(count-1)
      this.setData[i].count=count-1
      var data=JSON.stringify(this.setData)
      localStorage.setItem("Customer",data)

      }
      }
}
