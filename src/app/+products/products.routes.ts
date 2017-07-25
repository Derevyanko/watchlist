import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'gallery/:id',
    component: ProductGalleryComponent
  },
  {
    path: 'watchlist',
    component: WatchlistComponent
  }
];
