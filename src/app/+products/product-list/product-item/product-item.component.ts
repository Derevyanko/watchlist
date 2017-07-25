import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {WatchlistService} from "../../../services/watchlist.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() public product: Product;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit() {
  }

  public addToCart(product: Product) {
    this.watchlistService.addToCart(product);
  }

}
