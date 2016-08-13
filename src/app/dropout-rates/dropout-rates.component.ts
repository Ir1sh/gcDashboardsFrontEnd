import {Component} from '@angular/core';
import {AppState} from '../app.service';
import {Data} from './data/data.service';

@Component({
  selector: 'dropout-rates',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./dropout-rates.html')
})
export class DropoutRates {
  institutions;
    sectors;
    ranges;
    genders;
  constructor(public appState: AppState, private data: Data) {
  }
  ngOnInit() {
    console.log('hello this is dropoutrates: ');
    this.data.getInitData().subscribe(res => {
        this.institutions = res.institutions;
        this.sectors = res.sectors;
        this.ranges = res.ranges;
        this.genders = res.genders;
      console.log(this.institutions);
    });
  }
}
