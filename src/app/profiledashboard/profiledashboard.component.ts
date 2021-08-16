import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Previewdetails } from '../previewdetails';

@Component({
  selector: 'app-profiledashboard',
  templateUrl: './profiledashboard.component.html',
  styleUrls: ['./profiledashboard.component.css']
})
export class ProfiledashboardComponent implements OnInit {

  constructor(private customerService:CustomerService,private router:Router) { }
  cd1:Previewdetails=new Previewdetails();
  cdx=new Array<Previewdetails>();
  customerid:number=0;


  ngOnInit(): void {
  }

  details:any={};
  searchbycustomerid()
  {
    this.customerService.searchbycustomerid(this.customerid).subscribe
    (
      (data:any)=>{
      console.log(data);
      this.cd1=data;
      this.cdx.push(this.cd1);
      }
    )
  }
}
