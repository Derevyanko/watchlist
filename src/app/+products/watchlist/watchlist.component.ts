import { Component, OnInit } from '@angular/core';

import { WatchlistService } from "../../services/watchlist.service";
import { Product } from "../../model/product";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  public shoppingCartItems$: Observable<Product[]> = of([]);
  public shoppingCartItems: Product[] = [];

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit() {
    this.shoppingCartItems$ = this.watchlistService.getItems();
    this.shoppingCartItems$.subscribe(data => this.shoppingCartItems = data);
  }

  /* Remove product from watchlist */
  removeProduct(product: Product) {
    this.watchlistService.removeFromCart(product);
  }

}
