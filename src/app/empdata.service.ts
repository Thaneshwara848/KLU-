import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  constructor() { }
   people = [
    {
      "ID":100,
      "name": "Thanesh",
      "age": "25",
      "salary": "70000",
      "desig": "Dev"
    },
    {
      "ID":200,
      "name": "Rajesh",
      "age": "35",
      "salary": "80000",
      "desig": "Manager"
    },
    {
      "ID":300,
      "name": "Ganesh",
      "age": "65",
      "salary": "990000",
      "desig": "manager"
    },
    {
      "ID":500,
      "name": "Rakesh",
      "age": "35",
      "salary": "80000",
      "desig": "Manager"
    },
  ];
  empdata(){
    console.log("HI EMp Data ")
    
  }
}
