import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  arr=[1,2,3,4,5,6];

  fruit=["Apple","Banana","Cherrry"]

addfruit(fruit:any)
{
this.fruit.push(fruit)
}
}
