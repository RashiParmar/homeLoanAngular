import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrls: ['./show-account.component.css']
})
export class ShowAccountComponent implements OnInit {
  a1:Account=new Account();
  ax1=new Array<Account>();
  //acc:any;
  accountid: number=0;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {}

    findAccount(){
      this.accountService.findAccount(this.accountid).subscribe(
        (data)=>
        {
          console.log(data);
          //this.acc=data;
          this.a1=data;
         // this.a1=this.acc;
          this.ax1.push(this.a1);
        }
      )
    }
  }

