import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";
import {WatchlistService} from "../services/watchlist.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];
  public chbChecked: boolean;
  public radioDocTyp: string;

  constructor(
    private prodService: ProductService,
    private watchlistService: WatchlistService) { }

  ngOnInit() {
    /* Render list of products */
    this.prodService.getProducts()
      .subscribe(
        data => this.products = data,
        error => console.log(error)
      );

    /* Adding product to watchlist removes it from product list */
    this.watchlistService
      .getItems()
      .subscribe((data: Product[]) => {
        const allProducts = this.products;
        this.products = allProducts.filter(product => {
          return !this.isInWatchlist(product, data);
        });
    });
  }

  /* Check product in watchlist */
  private isInWatchlist(product: Product, watchlist: Product[]): boolean {
    return !!watchlist.find(data => data.id === product.id);
  }

  /* Listen event from checkbox */
  chbSelected(value: boolean): void {
    this.chbChecked = value;
  }

  /* Listen events from radio */
  datasheetsRadio(value: string): void {
    this.radioDocTyp = value;
  }

  pricelistsRadio(value: string): void {
    this.radioDocTyp = value;
  }

}
