import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class Data {
  constructor(public http: Http) {}
  getInitData() {
    return this.http.get('http://gcDashboardService:9000/occupations').map(res => res.json());
  }
  getResults(occupationId) {
    return this.http.get('http://gcDashboardService:9000/occupations/prospects/' + occupationId).map(res => res.json());
  }
}
