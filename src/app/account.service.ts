import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9898/homeloanrest/api";

  //RETRIEVING ALL ACCOUNT DETAIL
 findAccount(accountid:number){
    return this.httpClient.get(this.baseUrl+"/account/"+accountid);
  }
}
