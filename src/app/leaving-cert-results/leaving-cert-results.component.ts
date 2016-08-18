import {Component} from '@angular/core';
import {AppState} from '../app.service';
import {Data} from './data/data.service';
import { LeavingCertChartOne } from './charts/chartOne/chart-one.ts';
import { LeavingCertChartTwo } from './charts/chartTwo/chart-two.ts';
import { LeavingCertChartThree } from './charts/chartThree/chart-three.ts';
import { LeavingCertChartFour } from './charts/chartFour/chart-four.ts';
import { LeavingCertChartFive } from './charts/chartFive/chart-five.ts';
import { LeavingCertChartSix } from './charts/chartSix/chart-six.ts';

@Component({
  selector: 'leaving-cert-results',
  providers: [
    Data
  ],
  directives: [LeavingCertChartOne, LeavingCertChartTwo, LeavingCertChartThree, LeavingCertChartFour, LeavingCertChartFive, LeavingCertChartSix],
  pipes: [],
  styles: [],
  template: require('./leaving-cert-results.html')
})
export class LeavingCertResults{
  leavingCertResults;
    grades;
    subjects;
    levels;
    entered;
    results;
  constructor(public appState: AppState, public data: Data) {}
  ngOnInit() {
    console.log('hello this is leaving cert results: ');
      this.grades = this.data.getGrades();
      this.subjects = this.data.getSubjects();
      this.levels = [{name: 'Hons', value: 1}, {name: 'Pass', value: 2}];
      this.results = {};
      
        this.entered = [
            {subject: 1, level: 1, grade: 1},
            {subject: 2, level: 1, grade: 1},
            {subject: 3, level: 1, grade: 1},
            {subject: 4, level: 1, grade: 1},
            {subject: 5, level: 1, grade: 1},
            {subject: 6, level: 1, grade: 1}
        ];
      this.data.getInitData().subscribe(res => {
        this.leavingCertResults = res;
        this.enteredInit(this.entered);
      console.log(this.leavingCertResults);
    });
  }

    enteredInit(entered) {
        this.results.points = this.calculatePoints(entered);
        this.results.achieving = this.calculatePercentAchieving(this.results.points);
        this.results.charts = this.getChartValues(entered);
    }
    
    enteredUpdated(value, field, idx) {
        console.log(value, field, idx);
        this.entered[parseInt(idx, 10)][field] = parseInt(value, 10);
        this.results.points = this.calculatePoints(this.entered);
        this.results.achieving = this.calculatePercentAchieving(this.results.points);

        if (field === 'subject') {
            this.results.charts = this.getChartValues(this.entered);
        }
    }

    calculatePoints(entered) {
        return entered.reduce((acc, v) => {
            console.log(acc, v.level, v.grade);
            return acc + (v.level === 1 ? this.getGrade(v.grade).points : this.getGrade(v.grade).pointsPass)
        }, 0)
    }

    calculatePercentAchieving(points) {
        console.log('POINTS: ', points);
    }


    getChartValues(entered) {
        const getParam = (o, s) =>  {
            s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
            s = s.replace(/^\./, '');           // strip a leading dot
            var a = s.split('.');
            for (var i = 0, n = a.length; i < n; ++i) {
                var k = a[i];
                if (k in o) {
                    o = o[k];
                } else {
                    return;
                }
            }
            return o;
        }
        //get each subject object
        const subjs = entered.map(o => this.getSubject(o.subject));
        console.log('SUBJECTS: ', subjs);
        console.log('LEAVING CERT RESULTS: ', this.leavingCertResults);
        //get lc data for each subject
        const lcData = subjs.map(s => {
            const lcResults = this.leavingCertResults.map(lcr => {
                return {'subjectId': s.id, 'yearId': lcr.yearid, 'gradeId': lcr.gradeid, 'info': getParam(lcr, s.path + 'percent') }
            });
            return {'subjectName': s.name, 'results': lcResults};
        });

        const reducedlcData = lcData.map(s => {
            const reducedResults = s.results.reduce((acc, r) => {
                if (acc[r.gradeId]) {
                        acc[r.gradeId] = acc[r.gradeId] + r.info;
                } else {
                    acc[r.gradeId] = r.info;
                }
                return acc;
            }, {})

            return {'subjectName': s.subjectName, 'results': reducedResults};
        });

        console.log('LCDATAREDUCED', reducedlcData);

        //change result keys

        const withProperKeys = reducedlcData.map(s => {
            const newResultsObj = {};
            Object.keys(s.results).forEach(k => {
                newResultsObj[this.getGrade(k).name] = s.results[k];
            });
            return {'subjectName': s.subjectName, 'results': newResultsObj};
        })

        console.log('changedKeys', withProperKeys);
        return withProperKeys;
    }

    getSubject(id) {
        // console.log('SUBJECT: ', id);
        return this.subjects.find(s => parseInt(s.id, 10) === parseInt(id, 10));
    }
    getLevel(value) {
        // console.log('VAOUE: ', value);
        return this.levels.find(l => parseInt(l.value, 10) === parseInt(value, 10));
    }
    getGrade(id) {
        // console.log('GRADE: ', id);
        return this.grades.find(g => parseInt(g.id, 10) === parseInt(id, 10));
    }
}
