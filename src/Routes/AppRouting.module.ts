import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProductListComponent } from 'src/app/components/shopping-cart/product-list/product-list.component';

const routes:Routes=[

    {path:'productlist',component:ProductListComponent},
    {path:'Home',component: HomeComponent},
    {path:'',component: HomeComponent},
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }