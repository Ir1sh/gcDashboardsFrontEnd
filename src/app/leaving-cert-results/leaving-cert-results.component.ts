import {Component} from '@angular/core';
import {AppState} from '../app.service';
import {Data} from './data/data.service';

@Component({
  selector: 'leaving-cert-results',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./leaving-cert-results.html')
})
export class LeavingCertResults{
  leavingCertResults;
  constructor(public appState: AppState, public data: Data) {
    data.getInitData().subscribe(res => {
        this.leavingCertResults = res;
      console.log(this.leavingCertResults);
    });
  }
  ngOnInit() {
    console.log('hello this is leaving cert results: ');
  }
}
