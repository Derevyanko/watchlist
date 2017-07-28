import {Component, OnInit, HostListener, Input} from '@angular/core';
import {Product} from "../../model/product";
import { Pipe, PipeTransform } from '@angular/core';

/* Filter for checkbox */
@Pipe({
  name: 'checkboxFilter'
})
export class CheckboxFilterPipe implements PipeTransform {
  transform(products: Product[], enable: boolean) : any {
    return products.filter(product => {
      if (enable) {
        return product.fireresistance !== "";
      }
        return products;
    });
  }
}

/* Filter for radio */
@Pipe({
  name: 'doctypFilter'
})
export class DocTypFilterPipe implements PipeTransform {
  transform(products: Product[], doctyp: string) : any {
    return products.filter(product => {
      if (doctyp === 'datasheets') {
        return product.doctyp === 'datasheets';
      } else if (doctyp === 'pricelists') {
        return product.doctyp === 'pricelists';
      }
      return products;
    });
  }
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() public products: Product[] = [];
  @Input() public enableChbFilter: boolean;
  @Input() public docTyp: string;
  public show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  /* Listen scroll event */
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    if (window.scrollY >= document.documentElement.scrollHeight - window.innerHeight) {
      alert("bottom");
    }
  }

  /* Change view of layout */
  th() {
    this.show = false;
  }

  list() {
    this.show = true;
  }

}
