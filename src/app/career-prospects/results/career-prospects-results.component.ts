import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {AppState} from '../../app.service';
import {Data} from '../data/data.service';
import { CareerProspectsChartOne } from './charts/chartOne/chart-one.ts';
import { CareerProspectsChartTwo } from './charts/chartTwo/chart-two.ts';
import { CareerProspectsChartThree } from './charts/chartThree/chart-three.ts';
import { CareerProspectsChartFour } from './charts/chartFour/chart-four.ts';
import { CareerProspectsChartFive } from './charts/chartFive/chart-five.ts';

@Component({
  selector: 'career-prospects-results',
  providers: [
    Data
  ],
    directives: [CareerProspectsChartOne, CareerProspectsChartTwo, CareerProspectsChartThree, CareerProspectsChartFour, CareerProspectsChartFive],
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
                  this.prospects.earnings = {
                      avg: {
                          median: this.prospects.averageEmp.medianwageest
                      },
                      item: {
                          median: this.prospects.emp.medianwageest ,
                          '10thPercentile': this.prospects.emp['10thpercentile'],
                          '25thPercentile': this.prospects.emp['25thpercentile'],
                          '75thPercentile': this.prospects.emp['75thpercentile'],
                      }
                  };
                  this.prospects.forecastGrowth = {
                      'irlEmp2013Est': this.prospects.emp['emp2012inthousands'],
                      'irlEmp2020Est': this.prospects.emp['emp2020inthousands']} ;
                  this.prospects.earningToAvg = {
                      earningsRelativeToAvg:
                      (this.prospects.emp.medianwageest / this.prospects.averageEmp.medianwageest),
                      allOccupations: 1.00
                  };
                  this.prospects.percentChange = {
                      'percentChangeTo2020': this.getPercentChange(
                          this.prospects.emp['emp2012inthousands'],
                          this.prospects.emp['emp2020inthousands']),
                      allOccupations: this.getPercentChange(
                          this.prospects.averageEmp['emp2012inthousands'],
                          this.prospects.averageEmp['emp2020inthousands'])
                  };
                  this.prospects.education = {
                      item: {
                          percentlessthanleavingcert: this.prospects.edu.percentlessthanleavingcert,
                          percenthasleavingcert: this.prospects.edu.percenthasleavingcert,
                          percentsomecollegenodegree: this.prospects.edu.percentsomecollegenodegree,
                          percentpassdegree: this.prospects.edu.percentpassdegree,
                          percenthonorsdegree: this.prospects.edu.percenthonorsdegree,
                          percentmastersdegree: this.prospects.edu.percentmastersdegress,
                          percentphdormastersdegree: this.prospects.edu.percentphdormastersdegree
                      },
                      avg: {
                          percentlessthanleavingcert: this.prospects.averageEdu.percentlessthanleavingcert,
                          percenthasleavingcert: this.prospects.averageEdu.percenthasleavingcert,
                          percentsomecollegenodegree: this.prospects.averageEdu.percentsomecollegenodegree,
                          percentpassdegree: this.prospects.averageEdu.percentpassdegree,
                          percenthonorsdegree: this.prospects.averageEdu.percenthonorsdegree,
                          percentmastersdegree: this.prospects.averageEdu.percentmastersdegress,
                          percentphdormastersdegree: this.prospects.averageEdu.percentphdormastersdegree
                      }
                  } ;
                  console.log(this.prospects);
              })
          })
  }

    getPercentChange(from, to) {
        return (to - from) / (from / 100);
    }
}
