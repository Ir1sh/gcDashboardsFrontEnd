import {Component} from '@angular/core';
import { Router } from '@angular/router'
import {AppState} from '../app.service';
import {Data} from './data/data.service';

@Component({
  selector: 'career-prospects',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./career-prospects.html')
})
export class CareerProspects {
    clusters;
    occupations;
    occBackup;
    constructor(public appState: AppState, public data: Data, private router: Router) {
    data.getInitData().subscribe(res => {
        this.clusters = res.clusters;
        this.occupations = res.occupations;
        this.occBackup = this.occupations;
        console.log(this.occupations, this.clusters);
    });
  }
  ngOnInit() {
    console.log('hello this is area prospects: ');
  }
    onClusterSelected(clusterId) {
        console.log("CLUSTERSELECTED: ", clusterId);
        this.occupations = this.occBackup.filter(o => o.clusterid === parseInt(clusterId, 10));
    }
    onOccupationSelected(occId) {
        console.log("OCCUPATION SELECTED: ", occId);
        this.router.navigate(['/career-prospects', occId]);
    }
}
