import { Component, Input, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {WatchlistService} from "../../../services/watchlist.service";

@Component({
  selector: 'app-product-item-tile',
  templateUrl: './product-item-tile.component.html',
  styleUrls: ['./product-item-tile.component.css']
})
export class ProductItemTileComponent implements OnInit {

  @Input() public product: Product;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit() {
  }

  public addToCart(product: Product) {
    this.watchlistService.addToCart(product);
  }

}
