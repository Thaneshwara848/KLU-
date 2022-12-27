import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindComponent } from './databind/databind.component';
import { DirectiveComponent } from './directive/directive.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
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
