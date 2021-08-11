import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanDetails } from './loan-details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost:9898/homeloanrest/api";

  //RETRIEVING ALL PRODUCTS
  getAll()
  {
    return this.httpClient.get(this.baseUrl+"/loandetails");
  }

  //ADDING PRODUCT
  addloanDetails(loandetails:LoanDetails)
  {
    return this.httpClient.post(this.baseUrl+"/loandetails",loandetails);
  }

  //Searching By loanid

  searchloanDetailsById(loanid:string)
  {
    return this.httpClient.get(this.baseUrl+"/loandetails/"+loanid);
  }

}
