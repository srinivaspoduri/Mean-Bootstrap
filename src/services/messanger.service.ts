import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject ,Observable} from 'rxjs'

import BASE_URL from 'src/EndPoints/Rest_ends'
@Injectable({
  providedIn: 'root'
})
export class MessangerService {

  subject = new Subject();
  servicecartItems = [];
  constructor(private _httpclient:HttpClient) { }
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

  public getMsg(name):Observable<any> {
    console.log("in fashion products")
    console.log(BASE_URL)
     return this._httpclient.get(BASE_URL+"getcart/"+name)
 }
}
