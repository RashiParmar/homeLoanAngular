import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Application } from '../application';
import { ApplicationService } from '../application.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private customerService:CustomerService, private router:Router,private accountService:AccountService,private applicationService:ApplicationService) { }

    // acc:any;
    // c1:any;
    app1:any;
    account?:any;

  ngOnInit(): void {
    this.getAllApplications(); 
  }


  getAllApplications(){
    this.applicationService.getApplication().subscribe((data)=>{
      console.log(data);
      this.app1=data;
      console.log(this.app1);
    })
  }

  deleteRow(applicationid:any){
    alert(applicationid)
    this.applicationService.deleteApp(applicationid).subscribe((data)=>{
      console.log(data);
    })
    this.router.navigate(['admin'])
  }

  CreateAccount(ap?:any) 
   {
      this.applicationService.updateApplication(ap).subscribe((data)=>
      {
        console.log(data);

        this.getAllApplications();
      })
     

//       this.applicationService.findApplication(id).subscribe((data)=>{
//        console.log(data);
//        this.app1=data as Application;
//        this.app1.loanstatus="Approved"; 
//  })
    //  this.router.navigate(['account']);

    //  this.applicationService.getApplication().subscribe((data)=>{
    //   console.log(data);
    //   this.app1=data as Application;
    //   this.app1.loanstatus="Approved";

    //   this.applicationService.updateApplication(this.app1).subscribe((data)=>
    // {
    //   console.log(data);
    // })
    // })

    
    //  this.router.navigate(['loanstatus'])
     
  //  this.accountService.addAccount(account).subscribe((data)=>{console.log(data);
  //   this.account=data });
  //   alert("Account Created!!");
   }
   
  }

  
    

