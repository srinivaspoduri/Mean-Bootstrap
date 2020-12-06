import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from 'src/app/components/ModelDialogs/product-details/product-details.component';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()product_data:any;

  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
   
  }
open(datax:any)
{
  const modalRef=this.modalService.open(ProductDetailsComponent);
  modalRef.componentInstance.Product_Details=datax;
}

}
