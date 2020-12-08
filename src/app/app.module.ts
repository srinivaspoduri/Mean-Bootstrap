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
import { LoginComponent } from './components/login/login.component';
import { LoginService } from 'src/services/login.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



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
    LoginComponent
    
   
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,NgbModule,NgHttpLoaderModule.forRoot(),
    MatSnackBarModule,BrowserAnimationsModule,MatFormFieldModule,
    FormsModule,ReactiveFormsModule,MatInputModule,FlexLayoutModule,MatCardModule

      ],
  providers: [ProductsService,SnackBarService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
