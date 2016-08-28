/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import {AppState} from './app.service';
import {AlternativeCourses} from "./alternative-courses/alternative-courses.component";
import {AreaProspects} from "./area-prospects/area-prospects.component";
import {CareerProspects} from "./career-prospects/career-prospects.component";
import {CollegeEvaluations} from "./college-evaluations/college-evaluations.component";
import {DropoutRates} from "./dropout-rates/dropout-rates.component.ts";
import {LeavingCertResults} from "./leaving-cert-results/leaving-cert-results.component";
import {SchoolEvaluations} from "./school-evaluations/school-evaluations.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <nav class="col-xs-12">
      <span>
        <a [routerLink]=" ['./'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./leaving-cert-results'] ">
          Leavin Cert Results
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./school-evaluations'] ">
          School Evaluations
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./alternative-courses'] ">
          Alternative Courses
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./college-evaluations'] ">
          College Evaluations
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./dropout-rates'] ">
          Drop-out Rates
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./area-prospects'] ">
          Area Prospects
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./career-prospects'] ">
          Career Prospects
        </a>
      </span>
    </nav>

    <main class="container-fluid">
      <router-outlet></router-outlet>
    </main>


    <footer>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    </footer>
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
