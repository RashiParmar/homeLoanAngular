import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Previewdetails } from './previewdetails';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost:9898/homeloanrest/api";

  getAll()
{
  return this.httpClient.get(this.baseUrl+"/personal");
}

addValue(preview:Previewdetails)
{
  return this.httpClient.post(this.baseUrl+"/personal",preview);
}


}

