import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DatabindComponent } from './databind/databind.component';
import { DemocheckComponent } from './democheck/democheck.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactivefromComponent } from './reactivefrom/reactivefrom.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component'; // <== add the imports!


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    GalaryComponent,
    ErrorpageComponent,
    DatabindComponent,
    DemocheckComponent,
    DirectiveComponent,
    FormsComponent,
    ReactivefromComponent,
    ServiceDemoComponent,
    A1Component,
    A2Component,
    A3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                             
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
