import { Component, OnInit } from '@angular/core';
import CartService from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export default class HeaderComponent implements OnInit {
  public activeTab: string = '';
  public productsCounter: Observable<number> | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.productsCounter = this.cartService.counterInfo$;
    this.activeTab = localStorage.activeTab || 'product';
  }

  public onSelectItem(item: string): void {
    this.activeTab = item;
    localStorage.activeTab = this.activeTab;
  }

}
