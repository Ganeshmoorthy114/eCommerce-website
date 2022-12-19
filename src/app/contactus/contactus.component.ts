import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  CustomerData:FormGroup;

  constructor(private fb: FormBuilder) {
     this.CustomerData= this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      telephone: ["", Validators.required],
      review: ["", Validators.required]
    })
   }

   get add() {
    return this.CustomerData.controls
  }
  ngOnInit() {
  }
 
  save(){
    if (this.CustomerData.invalid) {
      this.CustomerData.markAllAsTouched()
    } 
  }
  x:any=[]
  type:any=[]
  myevent(x){
    console.log(x)
    this.type=x.target.value

    let typedata=JSON.stringify(this.type)
    localStorage.setItem("type",typedata)

  }
}
