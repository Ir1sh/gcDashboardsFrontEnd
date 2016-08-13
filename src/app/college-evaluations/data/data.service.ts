import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class Data {
  constructor(public http: Http) {}
  getInitData() {
    return this.http.get('http://gcDashboardService:9000/collegeinfo').map(res => res.json());
  }
  getResults(collegeId) {
    return this.http.get('http://gcDashboardService:9000/collegeinfo/' + collegeId).map(res => res.json());
  }
}
