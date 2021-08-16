import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Previewdetails } from '../previewdetails';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  phonenumber?:any;
  applicationid?:any;
  loanid?:any;
  password?:any;
  customerid?:any;
  // userid:any=0;
  // pwd:any="";
  message:any;
  data: any;
  constructor(private router:Router,private route:ActivatedRoute,private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  private selectedLink: string="login";        
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
          }  
  
      else
       return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
            
 } 

    loginForm()
  { debugger;
  //window.alert("login form submitted");
  if(this.customerService.addLogin(this.customerid,this.password).subscribe(
    (data)=>
    {console.log(data) ;
      console.log(this.customerid);
      localStorage.setItem("cuID", this.customerid.toString());
    })
    ){
      this.router.navigate(['profiledashboard']);
  }
  else{
    window.alert("Invalid Details")
  }
  
  
  
 

  }

  loanForm(){
    window.alert("loan form submitted"); 
  }
  
  NewUser(){
    this.router.navigate(['customer'])
  }

  Admin(){
    this.router.navigate(['adminlogin'])
  }

}













// this.message=data as Previewdetails;
//   if(this.message.customerid==this.userid && this.message.password==this.pwd)
//   {
//     window.alert("You have successfully logged In");
//     this.router.navigate(['home']);
//   }
//   else{
//     window.alert("Please enter valid User ID or Password")
//   }