import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  [x: string]: any;

  constructor(private router:Router) {
    
   }
   fruitdata(fruits){
    this.router.navigate(['/Newarrivals/Arrival2'],{queryParams:{_Num:fruits}})
  }

  Namedata(Name){
    this.router.navigate(['/Show'],{queryParams:{_Num:Name}})
  }
  namedata(Name){
    this.router.navigate(['/Show'],{queryParams:{_Num:Name}})
  }
}
