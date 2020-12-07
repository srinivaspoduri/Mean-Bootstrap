import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { ProductsService } from 'src/services/Product.service';
import { AppRoutingModule } from 'src/Routes/AppRouting.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import{NgbModule}from '@ng-bootstrap/ng-bootstrap'
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ProductDetailsComponent } from './components/ModelDialogs/product-details/product-details.component';
import { ProductdetailsComponent } from './components/shopping-cart/productdetails/productdetails.component';
import { CartitemComponent } from './components/shopping-cart/cart/cartitem/cartitem.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackBarService } from 'src/services/snack-bar.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProductdetailsComponent,
    CartitemComponent,
   
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,NgbModule,NgHttpLoaderModule.forRoot(),
    MatSnackBarModule,BrowserAnimationsModule

      ],
  providers: [ProductsService,SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
