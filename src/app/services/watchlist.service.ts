import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class WatchlistService {
  private productsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private productsInCart: Product[] = [];

  constructor() {
    this.productsInCartSubject.subscribe(data => this.productsInCart = data);
  }

  /* Add product to watchlist */
  public addToCart(product: Product) {
    this.productsInCartSubject.next([...this.productsInCart, product]);
  }

  /* Remove product from watchlist */
  public removeFromCart(product: Product) {
    const currentProducts = [...this.productsInCart];
    const productsWithoutRemoved = currentProducts.filter(data => data.id !== product.id);
    this.productsInCartSubject.next(productsWithoutRemoved);
  }

  /* Get all products from watchlist */
  public getItems(): Observable<Product[]> {
    return this.productsInCartSubject.asObservable();
  }

}
