import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement } from '../counter/actions';
import IProduct from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export default class CartService {
  public counterInfo$: Observable<number>;
  public productsInCart: IProduct[] = localStorage.productsInCart ? JSON.parse(localStorage.productsInCart) : [];

  constructor(private store: Store<{ count: number }>) {
    this.counterInfo$ = store.select('count');
  }

  public addToCart(product: IProduct) {
    product.counter = product.counter ? product.counter + 1 : 1;
    if(this.productsInCart.findIndex((prod : IProduct) => prod.id === product.id) === -1) {
      this.productsInCart.push(product);
    }
    localStorage.productsInCart = JSON.stringify(this.productsInCart)
    this.store.dispatch(increment());
  }

  public getProducts() {
    return this.productsInCart;
  }

  public deleteProduct(product : IProduct)  {
    if(product.counter > 1) {
      product.counter --;
    } else {
      let indexToDelete = this.productsInCart.findIndex((prod : IProduct) => prod.id === product.id);
      this.productsInCart.splice(indexToDelete,1)
    }
    localStorage.productsInCart = JSON.stringify(this.productsInCart)
    this.store.dispatch(decrement());
  }
}
