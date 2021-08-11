import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { LoanDetails } from '../loan-details';

@Component({
  selector: 'app-searchloandetails',
  templateUrl: './searchloandetails.component.html',
  styleUrls: ['./searchloandetails.component.css']
})
export class SearchloandetailsComponent implements OnInit {
  ld1:LoanDetails =new LoanDetails();
  ldx=new Array<LoanDetails>();
  loanId:string="";
  // ld:any;
  constructor(private ldService:DetailsService) { }

  ngOnInit(): void {
  }
 searchByloanId(){
   this.ldService.searchloanDetailsById(this.loanId).subscribe(
     (data:any)=>
     {
       console.log(data);
       this.ld1=data;
       this.ldx.push(this.ld1);
     }
   )
 }
}
