import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivefrom',
  templateUrl: './reactivefrom.component.html',
  styleUrls: ['./reactivefrom.component.css']
})
export class ReactivefromComponent implements OnInit {
  student:any;
  ngOnInit(): void {

    this.student=new FormGroup({

      username: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern("^[a-zA-z]*$")
      ]))
      ,
      college: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]))
      ,
      age: new FormControl("",Validators.compose([
        Validators.required,
        Validators.min(18),
        Validators.max(30)
      ]))
      

    })
   
  }
  
}
