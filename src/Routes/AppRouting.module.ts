import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from 'src/app/components/shopping-cart/product-list/product-list.component';

const routes:Routes=[

    {path:'productlist',component:ProductListComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }