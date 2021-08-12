import { Component, OnInit } from '@angular/core';
import CartService from '../../services/cart.service';
import IProduct from '../../interfaces/interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export default class CartComponent implements OnInit{
  public productsInCart : IProduct[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.productsInCart = this.cartService.getProducts();
  }

  public deleteProduct = (product:any) => this.cartService.deleteProduct(product);
}
