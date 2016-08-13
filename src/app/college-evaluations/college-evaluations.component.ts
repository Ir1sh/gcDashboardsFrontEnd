import {Component} from '@angular/core';
import {AppState} from '../app.service';
import {Data} from './data/data.service';

@Component({
  selector: 'college-evaluations',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./college-evaluations.html')
})
export class CollegeEvaluations {
  colleges;
  constructor(public appState: AppState, public data: Data) {
    data.getInitData().subscribe(res => {
        this.colleges = res;
      console.log(this.colleges);
    });
  }
  ngOnInit() {
    console.log('hello this is college-evaluations: ');
  }
}
