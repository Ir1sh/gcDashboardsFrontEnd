import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {AppState} from '../../app.service';
import {Data} from '../data/data.service';
import { DorChartOne } from './charts/chartOne/chart-one.ts';

@Component({
  selector: 'dropout-rates-results',
  providers: [
    Data
  ],
  directives: [DorChartOne],
  pipes: [],
  styles: [],
  template: require('./dropout-rates-results.html')
})
export class DropoutRatesResults {
  dor;
    constructor(public appState: AppState, private data: Data, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
      console.log('hello this is drop out rate results: ', this.route);
      this.route.params
          .subscribe(params => {
              console.log('PARAMS: ', params)
              const ps = {
                  "sectorId": parseInt(params['sectorId'], 10),
                  "institutionId": parseInt(params['institutionId'], 10),
                  "gradeId": parseInt(params['gradeId'], 10),
                  "genderId": parseInt(params['genderId'], 10)
              }
              this.data.getResults(ps).subscribe(res => {
                  this.dor = res;
                  console.log(this.dor);
              })
          })
  }
}
