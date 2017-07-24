import { Component, OnInit, HostListener } from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  show: boolean = true;

  constructor(private prodService: ProductService) { }

  ngOnInit() {
    this.prodService.getDataFromJson()
      .subscribe(
        data => this.products = data,
        error => console.log(error)
      );
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    /*if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)*/
    if (window.scrollY >= document.documentElement.scrollHeight - window.innerHeight) {
      alert("bottom");
    }
  }

  th(event: any) {
    this.show = true;
  }

  list(event: any) {
    this.show = false;
  }

}
