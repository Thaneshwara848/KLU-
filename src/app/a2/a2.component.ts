import { Component } from '@angular/core';
import { CommonServService } from '../common-serv.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component {
  constructor(private db2:CommonServService){
  }
  a2comp(){
    this.db2.commondbLogic();
    //console.log("A 2 comp with 100 line of code ")
  }
}
