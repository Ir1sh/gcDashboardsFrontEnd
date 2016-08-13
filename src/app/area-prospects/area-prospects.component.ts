import {Component} from '@angular/core';
import { Router } from '@angular/router'
import {AppState} from '../app.service';
import {Data} from './data/data.service';

@Component({
  selector: 'area-prospects',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./area-prospects.html')
})
export class AreaProspects {
  heaCategories;
    constructor(public appState: AppState, public data: Data, private router: Router) {
    data.getInitData().subscribe(res => {
        this.heaCategories = res;
      console.log(this.heaCategories);
    });
  }
  ngOnInit() {
    console.log('hello this is area prospects: ');
  }
    onCategorySelected(catId) {
        console.log("CATEGORY SELECTED: ", catId);
        this.router.navigate(['/area-prospects', catId]);
    }
}
