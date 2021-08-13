import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Previewdetails } from '../previewdetails';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  preview:Previewdetails;
  public isValid:number=0;
  constructor(private personalservice:CustomerService , private router:Router) 
  {
    
this.preview=new Previewdetails();
   }
  ngOnInit(): void {
  }
  
  saveData()
  {
  //  console.log(this.preview.Address)
   this.personalservice.addValue(this.preview).subscribe(
    (data)=>
    {
      console.log("Return Value From Rest"+data);
    }


   )
  }
  NextDoc(){
    this.router.navigate(['document']);
  }



}
