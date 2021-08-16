import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Previewdetails } from './previewdetails';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost:9898/homeloanrest/api";

  getCustomer()
{
  return this.httpClient.get(this.baseUrl+"/customer");
}

addValue(preview:Previewdetails)
{
  return this.httpClient.post(this.baseUrl+"/customer",preview);
}

addLogin(customerid?:number,password?:String)
{
  return this.httpClient.get(this.baseUrl+"/login/"+customerid+"/"+password);
}

searchbycustomerid(customerid:number)
{
  return this.httpClient.get(this.baseUrl+"/customer/"+customerid);
}

}

