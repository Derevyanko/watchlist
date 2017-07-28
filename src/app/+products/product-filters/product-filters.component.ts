import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FiltersService } from "../../services/filters.service";

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css']
})
export class ProductFiltersComponent implements OnInit {
  @Output() checkboxChecked = new EventEmitter<boolean>();

  @Output() datasheetsChecked = new EventEmitter<string>();
  @Output() pricelistsChecked = new EventEmitter<string>();

  constructor(private filterService: FiltersService) {
  }

  ngOnInit() {
  }

  /* Search Filter */
  search(term: string): void {
    this.filterService.search(term);
  }

  /* Fireresistance */
  getFireresistance(value: boolean): void {
    this.checkboxChecked.emit(value);
  }

  /* DocTyp */
  handleRadio(value: string): void {
    if (value === 'datasheets') {
      this.datasheetsChecked.emit(value);
    } else {
      this.pricelistsChecked.emit(value);
    }
  }

}
