import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {AppState} from '../../app.service';
import {Data} from '../data/data.service';

@Component({
  selector: 'career-prospects-results',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./career-prospects-results.html')
})
export class CareerProspectsResults {
  prospects;
    constructor(public appState: AppState, private data: Data, private route: ActivatedRoute) {}
  ngOnInit() {
    console.log('hello this is school evaluations: ');
      this.route.params
          .map(params => params['id'])
          .subscribe((id) => {
              this.data.getResults(id).subscribe(res => {
                  this.prospects = res;
                  console.log(this.prospects);
              })
          })
  }
}
