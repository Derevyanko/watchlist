import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(private prodService: ProductService) { }

  ngOnInit() {
    this.prodService.getProducts()
      .subscribe(
        data => this.products = data,
        error => console.log(error)
      );
  }

}
