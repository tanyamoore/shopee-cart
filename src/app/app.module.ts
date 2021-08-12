import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/reducer';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import CartComponent from './components/cart/cart.component';
import HeaderComponent from './components/header/header.component';
import ProductsListComponent from './components/products-list/products-list.component';
import CartService from './services/cart.service';
import ProductComponent from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ProductsListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
