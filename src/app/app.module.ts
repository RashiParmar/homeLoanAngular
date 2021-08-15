import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import {HttpClientModule} from '@angular/common/http';
import { DocumentComponent } from './document/document.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { AdminComponent } from './admin/admin.component';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowAccountComponent,
    DocumentComponent,
    ShowDetailsComponent,
    AdminComponent,
    ApplicationComponent,
    HomeComponent,
    CalculatorComponent,
    LoginComponent,
    FaqComponent,
    AboutusComponent,
    SignupComponent,
    SearchCustomerComponent,
    AdminloginComponent,
   

    
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
