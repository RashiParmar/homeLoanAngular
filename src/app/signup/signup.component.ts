import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Previewdetails } from '../previewdetails';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   message?:any={};
   customer?:any={};
   preview:Previewdetails;
  constructor(private router:Router, private customerService:CustomerService) { this.preview=new Previewdetails();}

  
 

  formSubmit(empForm:any)
  {

    // this.customerService.addValue(this.customer).subscribe((data)=>{console.log(data);this.message=data})
    // alert("Your details has been saved")
   }
    // this.router.navigate(['show-account'])

    saveData(){
      this.customerService.addValue(this.customer).subscribe((data)=>{console.log(data);this.message=data})
      alert("Your details has been saved"); 
    }
  
  callCustomer(){
    if(this.message!=null)
    {
     this.router.navigate(['customer',this.message.customerid]);
    }
    else
    {
      alert("Please save the details before you continue");
    }
  }

  ngOnInit(): void { } 
}
