import {Component} from '@angular/core';
import { Router } from '@angular/router'
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
    constructor(public appState: AppState, public data: Data, private router: Router) {
    data.getInitData().subscribe(res => {
      this.categories = res.categories;
      this.courses = res.courses;
      console.log(this.courses, this.categories);
    });
  }
  ngOnInit() {
    console.log('hello this is alt courses component: ');
  }
    onCategorySelected(catId) {
        console.log("Category SELECTED: ", catId);
        this.router.navigate(['/alternative-courses', catId]);
    }
}
