import {Component} from '@angular/core';
import {AppState} from '../app.service';
import {Data} from './data/data.service';

@Component({
  selector: 'career-prospects',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./career-prospects.html')
})
export class CareerProspects {
    clusters;
    occupations;
  constructor(public appState: AppState, public data: Data) {
    data.getInitData().subscribe(res => {
        this.clusters = res.clusters;
        this.occupations = res.occupations;
        console.log(this.occupations, this.clusters);
    });
  }
  ngOnInit() {
    console.log('hello this is area prospects: ');
  }
}
