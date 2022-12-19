import { HttpClient} from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { filter } from 'rxjs/operators';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-arraival2',
  templateUrl: './arraival2.component.html',
  styleUrls: ['./arraival2.component.css']
})

export class Arraival2Component implements OnInit {
  datas: any;
  Array: any;
 
  constructor(private http: HttpClient,private getdata:DatashareService,private router:Router, private route: ActivatedRoute, private fb: FormBuilder) {

   }

   fruits:any=[]
  ngOnInit() {
    let parse=JSON.parse(localStorage.getItem("fruits"))
    
    if(parse!=null){
      this.studentData=parse
    }
    this.route.queryParams.pipe(filter(params =>params._Num))
    .subscribe(params => {
      this.fruits=atob(params._Num)

      this.fruit()
      
  })

}
fruit(){
  this.http.get<any>("assets/json/fruidData.json").subscribe(data => {
    this.product =data

    this.editData(this.fruits)

})
}
  product: any = []
setData:any={}
 editData(data) {
  for (let i = 0; i < this.product.length; i++) {
    var value = this.product[i];

    if (value.fruits == data)
    { 
      console.log(value)
     this.setData=value
     this.totalprice=this.setData.price
    }
  }
}
value:any = []
size:any =[]

totalprice:any=[]
count=1;
incresae(type:string){
  type=='add'?this.count++:this.count--;
 
  this.totalprice=this.setData.price*this.count
  if(this.count === 0 ){
    return this.count++ 
  
  }
}
studentData:any=[]

 AddtheCard(){

  var studentData={
  
    productId:this.setData.productId,
    productName:this.setData.fruits,
    price:this.setData.price,
    count:this.count,
    totalprice:this.totalprice
    
  }

  this.studentData.push(studentData)
  let Data=JSON.stringify(this.studentData)

  localStorage.setItem("fruits",Data)

}
}

