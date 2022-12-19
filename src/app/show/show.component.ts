import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  datas: any;
  Array: any;
  Name:any;
  totalprice: any=[]
  constructor(private http: HttpClient,private getdata:DatashareService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let parse=JSON.parse(localStorage.getItem("fruits"))
    
    if(parse!=null){
      this.studentData=parse
    }

    this.route.queryParams.pipe(filter(params =>params._Num))
    .subscribe(params => {
      this.Name=atob(params._Num)

      this.mobile()

  })
  }

  mobile(){
    this.http.get<any>("assets/json/eleactrnic.json").subscribe(data => {
      this.product =data

      this.data(this.Name)
  })
  this.http.get<any>("assets/json/mobile.json").subscribe(data => {
    this.product =data

    this.data(this.Name)
})
  
}
product: any = []
setData:any={}
 data(data) {

  for (let i = 0; i < this.product.length; i++) {
    var value = this.product[i];

    if (value.Name == data)
    { 
      console.log(value)
     this.setData=value
     this.totalprice=this.setData.price
    }
  }
}

value:any = []
size:any =[]

count=1;
incresae(type:string){
  type=='add'?this.count++:this.count--;
 
  this.totalprice=this.setData.price*this.count

  console.log(this.totalprice)
  if(this.count === 0 ){
    return this.count++ 
  }
}
studentData:any=[]
AddtheCard(){

  var studentData={
  
    productId:this.setData.productId,
    productName:this.setData.Name,
    price:this.setData.price,

    count:this.count,
    totalprice:this.totalprice
    
  }
 
  this.studentData.push(studentData)
  let Data=JSON.stringify(this.studentData)
// debugger
  localStorage.setItem("fruits",Data)
}
buy(){
  var studentData={
  
    productId:this.setData.productId,
    productName:this.setData.Name,
    price:this.setData.price,

    count:this.count,
    totalprice:this.totalprice
    
  }
 
  this.studentData.push(studentData)
  let Data=JSON.stringify(this.studentData)
// debugger
  localStorage.setItem("order",Data)
}
}
