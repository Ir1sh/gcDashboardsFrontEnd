import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
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

export const routes: RouterConfig = [
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

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  'About': require('es6-promise-loader!./about'),
  'Detail': require('es6-promise-loader!./+detail'),
  'Index': require('es6-promise-loader!./+detail'), // must be exported with detail/index.ts
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['About'],
  asyncRoutes['Detail'],
   // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
