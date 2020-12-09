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
    this.messangerservice.getMsg("srinu").subscribe((savedcartdata:any)=>{

      console.log("saved cart data is "+JSON.stringify(savedcartdata))
    }
    );
   this.cartItems=this.messangerservice.servicecartItems;
  }

}
