import {Component} from '@angular/core';
import {AppState} from '../app.service';
import {Data} from './data/data.service';

@Component({
  selector: 'alternative-courses',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./alternative-courses.html')
})
export class AlternativeCourses {
  categories;
  courses;
  constructor(public appState: AppState, public data: Data) {
    data.getData().subscribe(res => {
      this.categories = res.categories;
      this.courses = res.courses;
      console.log(this.courses, this.categories);
    });
  }
  ngOnInit() {
    console.log('hello this is alt courses component: ');
  }
}
