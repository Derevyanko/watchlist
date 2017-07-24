import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './prodlanding/product-list/product-list.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { RouterModule } from '@angular/router';
import { routes } from './products.routes';
import { ProdlandingComponent } from './prodlanding/prodlanding.component';
import { ProductFiltersComponent } from './prodlanding/product-filters/product-filters.component';
import { ProductItemComponent } from './prodlanding/product-list/product-item/product-item.component';
import { ProductGalleryComponent } from './prodlanding/product-gallery/product-gallery.component';
import { ProductItemTileComponent } from './prodlanding/product-list/product-item-tile/product-item-tile.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    WatchlistComponent,
    ProdlandingComponent,
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
