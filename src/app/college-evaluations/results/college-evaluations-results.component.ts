import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {AppState} from '../../app.service';
import {Data} from '../data/data.service';
import { CollegeEvaluationsChartOne } from './charts/chartOne/chart-one.ts';
import { CollegeEvaluationsChartTwo } from './charts/chartTwo/chart-two.ts';
import { CollegeEvaluationsChartThree } from './charts/chartThree/chart-three.ts';
import { CollegeEvaluationsChartFour } from './charts/chartFour/chart-four.ts';
import { CollegeEvaluationsChartFive } from './charts/chartFive/chart-five.ts';
import { CollegeEvaluationsChartSix } from './charts/chartSix/chart-six.ts';
import { CollegeEvaluationsChartSeven } from './charts/chartSeven/chart-seven.ts';
import { CollegeEvaluationsChartEight } from './charts/chartEight/chart-eight.ts';
import { CollegeEvaluationsChartNine } from './charts/chartNine/chart-nine.ts';
import { CollegeEvaluationsChartTen } from './charts/chartTen/chart-ten.ts';
import { CollegeEvaluationsChartEleven } from './charts/chartEleven/chart-eleven.ts';
import { CollegeEvaluationsChartTwelve } from './charts/chartTwelve/chart-twelve.ts';
import { CollegeEvaluationsChartThirteen } from './charts/chartThirteen/chart-thirteen.ts';
import { CollegeEvaluationsChartFourteen } from './charts/chartFourteen/chart-fourteen.ts';

@Component({
  selector: 'college-evaluations-results',
  providers: [
    Data
  ],
    directives: [CollegeEvaluationsChartOne, CollegeEvaluationsChartTwo, CollegeEvaluationsChartThree, CollegeEvaluationsChartFour, CollegeEvaluationsChartFive, CollegeEvaluationsChartSix, CollegeEvaluationsChartSeven, CollegeEvaluationsChartEight, CollegeEvaluationsChartNine, CollegeEvaluationsChartTen, CollegeEvaluationsChartEleven, CollegeEvaluationsChartTwelve, CollegeEvaluationsChartThirteen, CollegeEvaluationsChartFourteen],
  pipes: [],
  styles: [],
  template: require('./college-evaluations-results.html')
})
export class CollegeEvaluationsResults {
  school;
    constructor(public appState: AppState, private data: Data, private route: ActivatedRoute) {}
  ngOnInit() {
    console.log('hello this is college evaluation results: ');
      this.route.params
          .map(params => params['id'])
          .subscribe((id) => {
              this.data.getResults(id).subscribe(res => {
                  this.school = res;
                  this.school.enrollments = {
                      undergrad: this.school.enrollmentsInfo.ugpercent,
                      postgrad: this.school.enrollmentsInfo.pgpercent,
                      male: this.school.enrollmentsInfo.malepercent,
                      female: this.school.enrollmentsInfo.femalepercent
                  };
                  this.school.enrollmentsByArea = {
                      health: this.school.enrollmentsInfo.bySubject.healthpercent,
                      socialsciences: this.school.enrollmentsInfo.bySubject.ssandblpercent,
                      science: this.school.enrollmentsInfo.bySubject.scipercent,
                      engineering: this.school.enrollmentsInfo.bySubject.engpercent,
                      education: this.school.enrollmentsInfo.bySubject.edupercent,
                      agriculture: this.school.enrollmentsInfo.bySubject.agpercent,
                      services: this.school.enrollmentsInfo.bySubject.servpercent
                  };
                  this.school.entryDifficulty = {
                      entryDifficulty: this.school.enrollmentsInfo.avgpoints2015
                  } ;
                  this.school.dropoutRates = {
                      dropOutRates: this.school.enrollmentsInfo.nonprogressionlvleight
                  };
                  this.school.receivingGrants = {
                      receivingGrants: this.school.enrollmentsInfo.incomeAndExpenditure.studentsinreceiptofstudentgrantpercent
                  };
                  this.school.coreStaffing = {
                      coreAcademicStaff: this.school.enrollmentsInfo.staffing.coreacademicstaff,
                      coreSupportStaff: this.school.enrollmentsInfo.staffing.coresupportstaff
                  } ;
                  this.school.studentStaffRatio = {
                      studentStaffRatio: this.school.enrollmentsInfo.staffing.studentfteacademic
                  };
                  this.school.staffProfile = {
                      staff55Plus: this.school.enrollmentsInfo.staffing.staffoverfiftyfivepercent,
                      staff40To54: this.school.enrollmentsInfo.staffing.stafffortyfiftyfourpercent,
                      staff20To39: this.school.enrollmentsInfo.staffing.stafftwentythirtyninepercent
                  };
                  this.school.staffQualifications = {
                      percentStaffFemale: this.school.enrollmentsInfo.staffing.stafffemalepercent,
                      percentSeniorAcademicStaffFemale: this.school.enrollmentsInfo.staffing.senioracademicstafffemalepercent,
                      percentStaffMasters: this.school.enrollmentsInfo.staffing.staffmasterspercent,
                      percentStaffPhd: this.school.enrollmentsInfo.staffing.staffphdpercent
                  };
                  this.school.internationalEas = {
                      educationalAccessScheme: this.school.enrollmentsInfo.demographics.entrantsfromeaspercent
                  };
                  this.school.international = {
                      euInternational: this.school.enrollmentsInfo.demographics.euinternationalpercent,
                      nonEuInternational: this.school.enrollmentsInfo.demographics.noneuinternationalpercent,
                      erasmusStudentsOutgoing: this.school.enrollmentsInfo.demographics.erasmusstudentsoutgoingpercent
                  };
                  this.school.expenditurePerStudent = {
                      expenditurePerStudent: this.school.enrollmentsInfo.incomeAndExpenditure.expenditureperstudent
                  };
                  this.school.researchIncome = {
                      researchIncomePerStaffMember: this.school.enrollmentsInfo.incomeAndExpenditure.researchincomeperstafftwelve
                  };
                  this.school.incomeSources = {
                      otherIncome: this.school.enrollmentsInfo.incomeAndExpenditure.otherincome,
                      incomeFromResearch: this.school.enrollmentsInfo.incomeAndExpenditure.incomefromresearch,
                      incomeFromFees: this.school.enrollmentsInfo.incomeAndExpenditure.incomefees,
                      incomeFromStateGrants: this.school.enrollmentsInfo.incomeAndExpenditure.incomefromstategrants
                  };
                  console.log(this.school);
              })
          })
  }
}
