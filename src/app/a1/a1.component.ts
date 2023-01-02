import { Component } from '@angular/core';
import { CommonServService } from '../common-serv.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component {
 
  constructor(private db:CommonServService){

  }
  a1comp(){
    this.db.commondbLogic();
// console.log("Hi A1 COmp with  100 lineas of code ")
  }
}
