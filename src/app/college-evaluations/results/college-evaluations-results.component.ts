import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {AppState} from '../../app.service';
import {Data} from '../data/data.service';

@Component({
  selector: 'college-evaluations-results',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./college-evaluations-results.html')
})
export class CollegeEvaluationsResults {
  school;
    constructor(public appState: AppState, private data: Data, private route: ActivatedRoute) {}
  ngOnInit() {
    console.log('hello this is college evaluation results: ');
      this.route.params
          .map(params => params['id'])
          .subscribe((id) => {
              this.data.getResults(id).subscribe(res => {
                  this.school = res;
                  console.log(this.school);
              })
          })
  }
}
