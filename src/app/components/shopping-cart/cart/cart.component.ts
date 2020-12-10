import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/services/messanger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any=[];
  constructor(private messangerservice:MessangerService) { }

  ngOnInit() {
    this.messangerservice.getMsg("jhansi").subscribe((savedcartdata:any)=>{

      console.log("saved cart data is "+JSON.stringify(savedcartdata))
      this.cartItems=savedcartdata.cartitems[0].products;
      console.log("in CART component" +JSON.stringify(this.cartItems))
    }
    );
  // this.cartItems=this.messangerservice.servicecartItems;
  }

}
