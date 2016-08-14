import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {AppState} from '../../app.service';
import {Data} from '../data/data.service';

@Component({
  selector: 'alternative-courses-results',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./alternative-courses-results.html')
})
export class AlternativeCoursesResults {
    catId
    courses;
    institutions;
    types;
    places;
    constructor(public appState: AppState, private data: Data, private route: ActivatedRoute) {}
  ngOnInit() {
    console.log('hello this is alternative course results: ');
      this.route.params
          .map(params => params['id'])
          .subscribe(
              (id) => {
                  this.catId = parseInt(id, 10);
                  console.log('id: ', this.catId);
                  this.data.getInitData().subscribe(res => {
                      this.courses = res.courses.filter((c) => c.cgacategory === this.catId);
                      this.institutions = res.institutions;
                      this.types = res.types;
                      this.places = res.places;
                      console.log(this.courses);
                  });
              }
          )
  }

    getPlaces(courseId) {
        return this.places.find(p => p.courseid === courseId);
    }

    getInstitution(instId) {
        return this.institutions.find(i => i.id === instId);;
    }

    getInstitutionType(typeId) {
        console.log(typeId);
        return this.types.find(t => t.id === typeId);
    }
}
