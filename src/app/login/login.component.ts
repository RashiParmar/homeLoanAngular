import { Component, OnInit } from '@angular/core';
import { LoanDetails } from '../loan-details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dateofbirth?:any;
  loanid?:any;
  pass?:any;
  customerid?:any;
  constructor() { }

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
  {
  window.alert("login form submitted");
  }

  loanForm(){
    window.alert("loan form submitted"); 
  }

  
  
  formSubmit(login:any)
  {
    console.log(login.value);
  }

  formSubmit1(loan:any)
  {
    console.log(loan.value);
  }
}
