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
      console.log("adding first time or not exitsing product")
          product.quantity = 1;
          this.servicecartItems.push(product);
    }

    // console.log("sendmessage" + product)
    // if (this.servicecartItems.length === 0) {
    //   console.log("First to add cart")
    //   product.quantity = 1;
    //   this.servicecartItems.push(product);
    // }
    // else {
    //   for (let i in this.servicecartItems) {
    //     console.log(this.servicecartItems[i].id === product.id)
    //     if (this.servicecartItems[i].id === product.id) {
    //       console.log("if")
    //       this.servicecartItems[i].quantity++;
    //       break;
    //     }
    //     else {
    //       console.log("else")
    //       product.quantity = 1;
    //       this.servicecartItems.push(product);
    //       break;
          
    //     }
    //   }
    // }

    this.subject.next(this.servicecartItems);
  }

  getMsg() {
    console.log("in as observable")
    return this.subject.asObservable();
  }
}
