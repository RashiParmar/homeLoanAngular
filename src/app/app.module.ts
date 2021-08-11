import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import {HttpClientModule} from '@angular/common/http';
import { DocumentComponent } from './document/document.component';
import { SearchloandetailsComponent } from './searchloandetails/searchloandetails.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAccountComponent,
    DocumentComponent,
    SearchloandetailsComponent,
    ShowDetailsComponent,
    AdminComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
