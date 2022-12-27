import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  xyz=["Apple","Banana","Charry","Graps"];
  addfriut(friut:any)
  {
      this.xyz.push(friut);
  }
}
