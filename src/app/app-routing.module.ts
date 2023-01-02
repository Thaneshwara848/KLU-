import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindComponent } from './databind/databind.component';
import { DbempsComponent } from './dbemps/dbemps.component';
import { DirectiveComponent } from './directive/directive.component';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FormsComponent } from './forms/forms.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactivefromComponent } from './reactivefrom/reactivefrom.component';
import { RegisterComponent } from './register/register.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';

const routes: Routes = [
  {
    path:'backend',
    component:DbempsComponent
  },
  {
    path:'emp',
    component:EmployeeComponent
  },
  {
    path:'serv',
    component:ServiceDemoComponent
  },
  {
    path:'rec',component:ReactivefromComponent
  },
  {
    path:'form',component:FormsComponent
  },
  {
    path:'directive',
    component:DirectiveComponent
  },
  {
    path:'data',
    component:DatabindComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'galary',
    component:GalaryComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
{
  path:'',
  component:LoginComponent
},
{
  path:'**',
  component:ErrorpageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
