import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/services/Product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public records: any;
  constructor(public activateroute:ActivatedRoute, public productsservice: ProductsService) { }

  ngOnInit(): void {

    this.activateroute.queryParams.subscribe((searchItem)=>{
      console.log("$$$$$$$$$$$" + searchItem.catagory);
    
      this.productsservice.getCategoryProducts(searchItem.catagory).subscribe((posres)=>{
    
        this.records = posres.products;
        console.log("$$$$$$$$$$$" + this.records );
    
      }),(errRes)=>{
    
        console.log("err resonse received " + errRes.json)
        this.records = errRes;
      }
    })
  }

}
