import { Component } from '@angular/core';
import { CommonServService } from '../common-serv.service';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component {
  constructor(private db3:CommonServService)
  {
  }
   
 a3comp(){
  this.db3.commondbLogic();
   // console.log("A 3 comp with 100 lines of code ")
  }
}
