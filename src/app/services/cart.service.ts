import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import IProduct from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export default class CartService {
  counterSource = new BehaviorSubject<number>(localStorage.counter || 0);
  counterInfo$: Observable<number> = this.counterSource.asObservable();
  public productsInCart: IProduct[] = localStorage.productsInCart ? JSON.parse(localStorage.productsInCart) : [];

  public addToCart(product: IProduct) {
    product.counter = product.counter ? product.counter + 1 : 1;
    if(this.productsInCart.findIndex((prod : IProduct) => prod.id === product.id) === -1) {
      this.productsInCart.push(product);
    }
    localStorage.productsInCart = JSON.stringify(this.productsInCart)
    localStorage.counter = this.productsInCart.reduce((acc, prod) => acc +=prod.counter, 0)
    this.counterSource.next(localStorage.counter);
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
    localStorage.counter = this.productsInCart.reduce((acc, prod) => acc +=prod.counter, 0)
    this.counterSource.next(localStorage.counter);
  }
}
