import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class Data {
  constructor(public http: Http) {}
  getInitData() {
    return this.http.get('http://gcDashboardService:9000/dropoutrates').map(res => res.json());
  }
  getResults(dropoutRatesRequest) {
      return this.http.post('http://gcDashboardService:9000/dropoutrates', dropoutRatesRequest).map(res => res.json());
  }
}
