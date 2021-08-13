import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { SearchloandetailsComponent } from './searchloandetails/searchloandetails.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'show-account',component:ShowDetailsComponent},
  {path:'document',component:DocumentComponent},
  {path:'loandetails',component:SearchloandetailsComponent},
  {path:'account',component:ShowAccountComponent},
  {path:'application',component:ApplicationComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
