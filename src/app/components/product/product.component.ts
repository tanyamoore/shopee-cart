import { Component, Input } from '@angular/core';
import IProduct from '../../interfaces/interface';
import CartService from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export default class ProductComponent {
  @Input() product : any;
  @Input() cart : any;
  addToCart: (product : IProduct) => void
  deleteProduct: (product : IProduct) => void

  constructor(private cartService: CartService) {
    this.addToCart = (product: IProduct) =>  this.cartService.addToCart(product);
    this.deleteProduct = (product: IProduct) =>  this.cartService.deleteProduct(product);
  }
}
