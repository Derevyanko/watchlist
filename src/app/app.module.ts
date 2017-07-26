import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ProductsModule } from './+products/products.module';
import { NavComponent } from './nav/nav.component';
import { ProductService } from './services/product.service';
import { WatchlistService } from './services/watchlist.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService, WatchlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
