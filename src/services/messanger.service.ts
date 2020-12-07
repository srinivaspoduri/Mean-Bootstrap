import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MessangerService {

  subject = new Subject();
  servicecartItems = [];
  constructor() { }
  sendMsg(product) {

    let productexists = false;
    for (let i in this.servicecartItems) {
      console.log(this.servicecartItems[i].id === product.id)
      if (this.servicecartItems[i].id === product.id) {
        console.log("if")
        this.servicecartItems[i].quantity++;
        productexists=true;
        break;
      }
    }
    if(!productexists)
    {
      console.log("adding first time or not exitsing product" +JSON.stringify(product))
          product.quantity = 1;
          this.servicecartItems.push(product);
    }

        this.subject.next(this.servicecartItems);
  }

  getMsg() {
    console.log("in as observable")
    return this.subject.asObservable();
  }
}
