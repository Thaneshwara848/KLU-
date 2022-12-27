import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {

  name="Ramesh";
  collegename="KL   University";
total=0;
emi=0;
  abc(p:any,t:any,r:any){
    this.total=(p*t*r)/100;


   this.emi=this.total/12;
  }
}
