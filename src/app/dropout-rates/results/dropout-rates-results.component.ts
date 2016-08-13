import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {AppState} from '../../app.service';
import {Data} from '../data/data.service';

@Component({
  selector: 'dropout-rates-results',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./dropout-rates-results.html')
})
export class DropoutRatesResults {
  dor;
    constructor(public appState: AppState, private data: Data, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
      console.log('hello this is drop out rate results: ', this.route);
      this.router.routerState.queryParams
          .map(params => {
              console.log('PARAMS: ', params)
              return {
                  "sectorId": parseInt(params['sectorId'], 10),
                  "institutionId": parseInt(params['institutionId'], 10),
                  "gradeId": parseInt(params['gradeId'], 10),
                  "genderId": parseInt(params['genderId'], 10)
              }
          })
          .subscribe((obj) => {
              console.log('OBJECT: ', obj);
              this.data.getResults(obj).subscribe(res => {
                  this.dor = res;
                  console.log(this.dor);
              })
          })
  }
}
