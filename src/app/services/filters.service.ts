import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class FiltersService {
  private searchTerm$ = new Subject<string>();

  constructor() {
  }

  // Push a search term into the observable stream.
  public search(term: string): void {
    this.searchTerm$.next(term);
  }

}
