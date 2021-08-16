import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Previewdetails } from '../previewdetails';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {
  cd1:Previewdetails=new Previewdetails();
  cdx=new Array<Previewdetails>();
  customerid:number=0;
    constructor(private cService:CustomerService) { }
  
    ngOnInit(): void {
    }
  
    searchbycustomerid()
    {
      this.cService.searchbycustomerid(this.customerid).subscribe
      (
        (data:any)=>{
        console.log(data);
        this.cd1=data;
        this.cdx.push(this.cd1);
        }
      )
    }
  }
