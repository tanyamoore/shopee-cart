import { Component } from '@angular/core';
import CartService from '../../services/cart.service';
import IProduct from '../../interfaces/interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export default class CartComponent {
  productsInCart : IProduct[];
  deleteProduct : (product: any) => void;

  constructor(private cartService: CartService) {
    this.productsInCart = this.cartService.getProducts();
    this.deleteProduct = (product:any) => this.cartService.deleteProduct(product);
  }
}
