import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item-tile',
  templateUrl: './product-item-tile.component.html',
  styleUrls: ['./product-item-tile.component.css']
})
export class ProductItemTileComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}
