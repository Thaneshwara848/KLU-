import { Component } from '@angular/core';
import { EmpdataService } from '../empdata.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private data:EmpdataService){
    
  }
  mydata:any;
  getEmp(){
    this.mydata=this.data.people;
  }
}
