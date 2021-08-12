import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import CartComponent from './components/cart/cart.component';
import ProductsListComponent from './components/products-list/products-list.component';

@NgModule({
  imports: [
  RouterModule.forRoot([
              { path: '', redirectTo: '/product-list', pathMatch: 'full' },
              { path: 'product-list', component: ProductsListComponent },
              { path: 'cart', component: CartComponent },
            ])
  ],
  exports: [RouterModule]
})
export default class AppRoutingModule { }
