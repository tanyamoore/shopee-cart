import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import IProduct from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export default class CartService {
  counterSource = new BehaviorSubject<number>(localStorage.counter || 0);
  counterInfo$: Observable<number> = this.counterSource.asObservable();
  total = new BehaviorSubject<number>(localStorage.total || 0);
  totalAmount$: Observable<number> = this.total.asObservable();
  public productsInCart: IProduct[] = localStorage.productsInCart ? JSON.parse(localStorage.productsInCart) : [];

  public getProducts() {
    return this.productsInCart;
  }

  public addToCart(product: IProduct) {
    product.counter = product.counter ? product.counter + 1 : 1;
    product.total = product.counter * product.price;
    const index = this.productsInCart.findIndex((prod : IProduct) => prod.id === product.id)
    if (index === -1) {
    this.productsInCart.push(product);
    } else {
      this.productsInCart[index] = product
    }
    this.countAmount(product)
  }

  public deleteProduct(product : IProduct)  {
    if(product.counter > 1) {
      product.counter --;
    } else {
      let indexToDelete = this.productsInCart.findIndex((prod : IProduct) => prod.id === product.id);
      this.productsInCart.splice(indexToDelete,1)
    }
    this.countAmount(product);
  }

  private countAmount(product: IProduct) {
    let amount = 0;
    product.total = product.counter * product.price;
    this.productsInCart.forEach(prod => amount += prod.total);

    localStorage.counter = this.productsInCart.reduce((acc, prod) => acc += prod.counter, 0);
    localStorage.totalAmount = amount;
    localStorage.productsInCart = JSON.stringify(this.productsInCart);

    this.counterSource.next(localStorage.counter);
    this.total.next(localStorage.totalAmount);
  }
}
