import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  data:FormGroup;
  studentData: any=[];
  constructor(private fb:FormBuilder) {
    this.data= this.fb.group({
      name: ["", Validators.required],
      Lastname: ["", Validators.required],
      Email: ["", Validators.required],
      Password: ["", Validators.required]
    })
   }

   get add() {
    return this.data.controls
  }
  ngOnInit() {
    let parse=JSON.parse(localStorage.getItem("list"))
    
    if(parse!=null){
      this.studentData=parse

    }
  }
  submit(){
    var getForm=this.data.value
    if(this.data.invalid) {
      this.data.markAllAsTouched()
      
    } 
    {
   
      this.studentData.push(getForm)
      let data=JSON.stringify(this.studentData)
    
      localStorage.setItem("list",data)
      this.data.reset()
  }
  }

  removeData(i){
    this.studentData.splice(i,1)
    var data=JSON.stringify(this.studentData)
    localStorage.setItem("list",data)
  }
}
