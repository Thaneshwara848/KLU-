import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {

  name="Ramesh";
  collegename="KL   University";

  abc(){
    alert("Hi You clciked the button")
  }
}
