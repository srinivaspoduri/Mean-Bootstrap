import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/services/Product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  selectedproductdetails: any;
  public showinGrid:any=[];
  ServerData: any;
  constructor(public router: Router, public activeroute: ActivatedRoute, public productsservice: ProductsService) { }

  ngOnInit(): void {

    this.activeroute.queryParams.subscribe((selectedproductdetails) => {

      this.selectedproductdetails = selectedproductdetails;
      console.log("****" + selectedproductdetails);
    })

    this.productsservice.getSubCategoryProducts(this.selectedproductdetails.subcategory).subscribe((posRes) => {


      this.ServerData = posRes.products;
      console.log("%%%%%%%%"+this.ServerData)
      var lengths = this.ServerData.length;
      while (this.showinGrid.length < 8) {
        let value = Math.floor(Math.random() * (lengths - 1 - 0) + 0);
        console.log("show in Grid value "+value + " element "+this.ServerData[value])
        if (this.showinGrid.indexOf(value) === -1)
          this.showinGrid.push(this.ServerData[value])
      }
    }, (errRes) => {

      console.log("err resonse received " + errRes.body)
      this.ServerData = errRes;


    });

  }
  ShowDetails(datax) {
    console.log(Object.values(datax));
    this.router.navigate(['/productdetails/'], { queryParams: datax });

    this.activeroute.queryParams.subscribe((selectedproductdetails) => {

      this.selectedproductdetails = selectedproductdetails;
      console.log("****" + selectedproductdetails);
    })
  }
}

