import { Component, OnInit } from '@angular/core';
import { products } from '../../products';
import CartService from '../../services/cart.service';
import IProduct from '../../interfaces/interface'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export default class ProductsListComponent implements OnInit{
  public products: IProduct[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = products;
  }

  addToCart = (product: IProduct) =>  this.cartService.addToCart(product);
}
