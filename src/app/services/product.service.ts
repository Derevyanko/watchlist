import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Product } from '../model/product';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {

  private productsList$: Observable<Product[]>;

  constructor(private http: Http) {
    this.productsList$ = this.getDataFromJson();
  }

  /* Get Data From JSON file */
  getDataFromJson(): Observable<any> {
    return this.http.get('assets/data.json')
      .map((resp: Response) => {
        let prodList = resp.json().product;
        let list: Product[] = [];
        for (let index in prodList) {
          let product = prodList[index].data;
          list.push({
            id: product.id_product,
            category: product.categoryTitle,
            description: product.systemdescription,
            systitle: product.systitle,
            fireresistance: product.fireresistance,
            soundproof: product.soundproof,
            wallthickness: product.wallthickness,
            dampingstrength: product.dampingstrength
          })
        }
        return list;
      })
      .catch((error: any)=> { return Observable.throw(error);});
  }

  getProducts(): Observable<Product[]> {
    return this.productsList$;
  }

}
