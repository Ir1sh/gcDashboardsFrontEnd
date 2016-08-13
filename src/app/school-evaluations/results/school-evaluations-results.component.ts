import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {AppState} from '../../app.service';
import {Data} from '../data/data.service';
import { SchoolEvaluationsChartOne } from './charts/chartOne/chart-one.ts';
import { SchoolEvaluationsChartTwo } from './charts/chartTwo/chart-two.ts';

@Component({
  selector: 'school-evaluations-results',
  providers: [
    Data
  ],
    directives: [SchoolEvaluationsChartOne, SchoolEvaluationsChartTwo],
  pipes: [],
  styles: [],
  template: require('./school-evaluations-results.html')
})
export class SchoolEvaluationsResults {
    schoolInfo;
  constructor(public appState: AppState, private data: Data, private route: ActivatedRoute) {}
  ngOnInit() {
    console.log('hello this is school evaluations: ');
      this.route.params
          .map(params => params['id'])
          .subscribe((id) => {
              this.data.getResults(id).subscribe(res => {
                  this.schoolInfo = res;
                  console.log(this.schoolInfo);
              })
          })
  }
}
