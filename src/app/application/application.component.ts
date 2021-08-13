import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  app:Application;
  constructor(private appservice:ApplicationService, private router:Router) {
    this.app=new Application()
   }

  ngOnInit(): void {
  }
  saveData()
  {

      this.appservice.addApplication(this.app).subscribe(
        (data)=>{
          console.log("Return Value from REST"+data); 
        }
      )
  }
  Home(){
    this.router.navigate(['home']);
  }
}
