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
  //   console.log("xxx"+this.cartItems.length)
  //  this.messangerservice.getMsg().subscribe((product:any)=>
  //  {
  //   this.cartItems=product;
  //  });
   this.cartItems=this.messangerservice.servicecartItems;
  }

}
