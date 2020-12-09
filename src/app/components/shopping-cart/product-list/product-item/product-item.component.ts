import { Component, Input, OnInit,NgZone  } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from 'src/app/components/ModelDialogs/product-details/product-details.component';
import { MessangerService } from 'src/services/messanger.service';
import { SnackBarService } from 'src/services/snack-bar.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product_data: any;
  addedtocart:boolean=false;
   constructor(private _snackbar:SnackBarService, private modalService: NgbModal, public router: Router, private messangerservice: MessangerService) { }

  ngOnInit(): void {

  

  }
  open(datax: any) {
    const modalRef = this.modalService.open(ProductDetailsComponent);
    modalRef.componentInstance.Product_Details = datax;
  }
  productdetails(datax: any) {
    console.log(Object.values(datax));
    this.router.navigate(['/productdetails/'], { queryParams: datax });
  }
  handleAddToCart() {
    this.addedtocart=false;
    this.messangerservice.sendMsg(this.product_data)
    this._snackbar.openSnackBar("Added to Cart successfully","X")
    this.addedtocart=true;
  }
  ngAfterViewInit()
  {
    
  }
  openSnackBar() {

       
  }
  
}

