import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServService {

  constructor() { }

  commondbLogic(){
    console.log("HHHHI  Db logic from service  : 100 lines ")
  }
}
