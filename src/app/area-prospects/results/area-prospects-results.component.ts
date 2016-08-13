import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {AppState} from '../../app.service';
import {Data} from '../data/data.service';

@Component({
  selector: 'area-prospects-results',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./area-prospects-results.html')
})
export class AreaProspectsResults {
  prospects;
    constructor(public appState: AppState, private data: Data, private route: ActivatedRoute) {}
  ngOnInit() {
    console.log('hello this is area prospects results: ');
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
