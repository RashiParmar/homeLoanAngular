import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }
  
  ngOnInit(): void { }

  formSubmit(empForm:any)
  {
    this.router.navigate(['show-account'])
  }
}
