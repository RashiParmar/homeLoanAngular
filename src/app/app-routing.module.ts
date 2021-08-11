import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { SearchloandetailsComponent } from './searchloandetails/searchloandetails.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

const routes: Routes = [
  {path:'show-account',component:ShowDetailsComponent},
  {path:'document',component:DocumentComponent},
  {path:'loandetails',component:SearchloandetailsComponent},
  {path:'account',component:ShowAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
