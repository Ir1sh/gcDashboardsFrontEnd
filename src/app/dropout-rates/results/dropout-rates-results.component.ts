import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {AppState} from '../../app.service';
import {Data} from '../data/data.service';
import { DorChartOne } from './charts/chartOne/chart-one.ts';
import { DorChartTwo } from './charts/chartTwo/chart-two.ts';
import { DorChartThree} from './charts/chartThree/chart-three.ts';

@Component({
  selector: 'dropout-rates-results',
  providers: [
    Data
  ],
    directives: [DorChartOne, DorChartTwo, DorChartThree],
  pipes: [],
  styles: [],
  template: require('./dropout-rates-results.html')
})
export class DropoutRatesResults {
  dor;
    selectedSector;
    selectedInst;
    // selectedInstType;
    selectedGrade;
    selectedGender;
    constructor(public appState: AppState, private data: Data, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
      console.log('hello this is drop out rate results: ', this.route);
      this.route.params
          .subscribe(params => {
              console.log('PARAMS: ', params)
              this.selectedSector = this.appState.get('sectors')
                  .find(s => s.id === parseInt(params['sectorId'], 10));
              this.selectedInst = this.appState.get('institutions')
                  .find(i => i.id === parseInt(params['institutionId'], 10));
              // this.selectedInstType = appState.get('types');
              this.selectedGrade = this.appState.get('ranges')
                  .find(r => r.id === parseInt(params['gradeId'], 10));
              this.selectedGender = this.appState.get('genders')
                  .find(g => g.id === parseInt(params['genderId'], 10));
              
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
