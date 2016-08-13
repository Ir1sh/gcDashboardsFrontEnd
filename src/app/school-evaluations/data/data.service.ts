import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class Data {
  constructor(public http: Http) {}
  getInitData() {
    return this.http.get('http://gcDashboardService:9000/schoolinfo').map(res => res.json());
  }
  getResults(schoolInfoRequest) {
      return this.http.get('http://gcDashboardService:9000/schoolinfo/' + schoolInfoRequest).map(res => res.json());
  }
}
