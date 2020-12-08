import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { CartComponent } from 'src/app/components/shopping-cart/cart/cart.component';
import { ProductListComponent } from 'src/app/components/shopping-cart/product-list/product-list.component';
import { ProductdetailsComponent } from 'src/app/components/shopping-cart/productdetails/productdetails.component';

const routes:Routes=[

    {path:'productlist',component:ProductListComponent},
    {path:'Home',component: HomeComponent},
    {path:'',component: HomeComponent},
    {path:'productdetails',component: ProductdetailsComponent},
   // {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path:'cart',component: CartComponent},
    {path:'login',component: LoginComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }