import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  //accountDetails:any;
  ngOnInit(): void {
  }


  
//   this.accountService.getAllAccounts().subscribe((data)=>{
//     console.log(data);
//     this.accountDetails=data;
//     console.log(this.accountDetails)

//   })
// }
// deleteRow(oldid:any){alert(oldid)
//   this.accountService.deleteAccount(oldid).subscribe((data)=>{
//     console.log(data);
//   })
//   this.router.navigate(['viewAccounts'])
// }
// }
}