import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class Data {
  constructor(public http: Http) {}
  getInitData() {
    return this.http.get('http://gcDashboardService:9000/heacategories').map(res => res.json());
  }
  getResults(categoryId) {
    return this.http.get('http://gcDashboardService:9000/heacatcollegeprogressions/' + categoryId).map(res => res.json());
  }
}
