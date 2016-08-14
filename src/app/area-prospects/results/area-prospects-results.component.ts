import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {AppState} from '../../app.service';
import {Data} from '../data/data.service';
import { AreaProspectsChartOne } from './charts/chartOne/chart-one.ts';
import { AreaProspectsChartTwo } from './charts/chartTwo/chart-two.ts';
import { AreaProspectsChartThree } from './charts/chartThree/chart-three.ts';
import { AreaProspectsChartFour } from './charts/chartFour/chart-four.ts';
import { AreaProspectsChartFive } from './charts/chartFive/chart-five.ts';
import { AreaProspectsChartSix } from './charts/chartSix/chart-six.ts';

@Component({
  selector: 'area-prospects-results',
  providers: [
    Data
  ],
    directives: [AreaProspectsChartOne, AreaProspectsChartTwo, AreaProspectsChartThree, AreaProspectsChartFour, AreaProspectsChartFive, AreaProspectsChartSix],
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
                  this.prospects.relevance = {
                      'relevant': this.prospects.relevancelevelie,
                      'not relevant': this.prospects.irrelevanceleveleight}
                  this.prospects.gradautetrends09to14 = {'Graduate Trends': this.prospects.gradautetrends09to14}
                  console.log(this.prospects);
              })
          })
  }
}
