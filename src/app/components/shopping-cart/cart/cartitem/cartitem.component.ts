import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {

  constructor() { }

  @Input() cartitem:any;
  ngOnInit(): void {

    console.log("in cart item")
  }

}
