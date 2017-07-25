import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Product} from "../model/product";
import {WatchlistService} from "../services/watchlist.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public watchlistProducts$: Observable<Product[]>;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit() {
    this.watchlistProducts$ = this.watchlistService.getItems();
    this.watchlistProducts$.subscribe(data => data);
  }

}
