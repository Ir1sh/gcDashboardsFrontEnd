import {Component} from '@angular/core';
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
  constructor(public appState: AppState, public data: Data) {
    data.getInitData().subscribe(res => {
        this.heaCategories = res;
      console.log(this.heaCategories);
    });
  }
  ngOnInit() {
    console.log('hello this is area prospects: ');
  }
}
