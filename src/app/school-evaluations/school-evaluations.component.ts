import {Component} from '@angular/core';
import { Router } from '@angular/router'
import {AppState} from '../app.service';
import {Data} from './data/data.service';

@Component({
  selector: 'school-evaluations',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./school-evaluations.html')
})
export class SchoolEvaluations {
  schools;
    constructor(public appState: AppState, public data: Data, private router: Router) {
    data.getInitData().subscribe(res => {
        this.schools = res;
      console.log(this.schools);
    });
  }
  ngOnInit() {
    console.log('hello this is school evaluations: ');
  }

    onSchoolSelected(schoolId) {
        console.log("SCHOOL SELECTED: ", schoolId);
        this.router.navigate(['/school-evaluations', schoolId]);
    }
}
