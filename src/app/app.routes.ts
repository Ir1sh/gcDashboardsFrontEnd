import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { AlternativeCourses} from './alternative-courses'
import {  AlternativeCoursesResults } from './alternative-courses/results'
import {AreaProspects} from "./area-prospects";
import { AreaProspectsResults} from "./area-prospects/results";
import {CareerProspects} from "./career-prospects";
import { CareerProspectsResults} from "./career-prospects/results";
import {CollegeEvaluations} from "./college-evaluations";
import { CollegeEvaluationsResults} from "./college-evaluations/results";
import {DropoutRates} from "./dropout-rates";
import { DropoutRatesResults} from "./dropout-rates/results";
import {LeavingCertResults} from "./leaving-cert-results";
import {SchoolEvaluations} from "./school-evaluations";
import { SchoolEvaluationsResults} from "./school-evaluations/results";
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
    {
        path: 'alternative-courses',
        component: AlternativeCourses,
        children: [
            {path: ':id', component: AlternativeCoursesResults},
            {path: ''}
        ]
    },
    {
        path: 'area-prospects',
        component: AreaProspects,
        children: [
            {path: ':id', component: AreaProspectsResults},
            {path: ''}
        ]
    },
    {
        path: 'career-prospects',
        component: CareerProspects,
        children: [
            {path: ':id', component: CareerProspectsResults},
            {path: ''}
        ]
    },
    {
        path: 'college-evaluations',
        component: CollegeEvaluations,
        children: [
            {path: ':id', component: CollegeEvaluationsResults},
            {path: ''}
        ]
    },
    {
        path: 'dropout-rates',
        component: DropoutRates,
        children: [
            {path: 'results', component: DropoutRatesResults},
            {path: ''}
        ]
    },
  { path: 'leaving-cert-results', component: LeavingCertResults },
    {
        path: 'school-evaluations',
        component: SchoolEvaluations,
        children: [
            {path: ':id', component: SchoolEvaluationsResults},
            {path: ''}
        ]
    },
  // make sure you match the component type string to the require in asyncRoutes
  { path: 'about', component: 'About',
    resolve: {
      'yourData': DataResolver
    }},
  // async components with children routes must use WebpackAsyncRoute
  { path: 'detail', component: 'Detail',
    canActivate: [ WebpackAsyncRoute ],
    children: [
      { path: '', component: 'Index' }  // must be included
    ]},
  { path: '**',    component: NoContent },
];
