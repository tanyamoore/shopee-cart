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

  constructor(private cartService: CartService) {}

  public addToCart = (product: IProduct) =>  this.cartService.addToCart(product);

  public deleteProduct = (product: IProduct) =>  this.cartService.deleteProduct(product);
}
