import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { MaterialModule } from '@angular/material';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { RouterModule } from '@angular/router';
import { routes } from './products.routes';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { ProductItemTileComponent } from './product-list/product-item-tile/product-item-tile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    WatchlistComponent,
    ProductFiltersComponent,
    ProductItemComponent,
    ProductGalleryComponent,
    ProductItemTileComponent
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
