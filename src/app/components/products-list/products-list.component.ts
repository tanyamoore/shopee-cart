import { Component } from '@angular/core';
import { products } from '../../products';
import CartService from '../../services/cart.service';
import IProduct from '../../interfaces/interface'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export default class ProductsListComponent {
  products: IProduct[];
  addToCart: (product : IProduct) => void

  constructor(private cartService: CartService) {
    this.products = products;
    this.addToCart = (product: IProduct) =>  this.cartService.addToCart(product);
  }
}
