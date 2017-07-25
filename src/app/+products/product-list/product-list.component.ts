import {Component, OnInit, HostListener, Input} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() public products: Product[] = [];
  show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    /*if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)*/
    if (window.scrollY >= document.documentElement.scrollHeight - window.innerHeight) {
      alert("bottom");
    }
  }

  th() {
    this.show = false;
  }

  list() {
    this.show = true;
  }

}
