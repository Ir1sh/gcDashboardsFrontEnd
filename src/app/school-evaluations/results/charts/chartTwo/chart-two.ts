import {Component, Input} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import '../../../../../../node_modules/chart.js/dist/Chart.bundle.min.js';
import {CHART_DIRECTIVES} from 'ng2-charts';

// webpack html imports
let template = require('./chart-two.html');

@Component({
    selector: 'school-evaluation-chart-two',
    properties: [
        'chartValues'
    ],
  template: template,
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class SchoolEvaluationsChartTwo {
    @Input() chartValues:any = {};
    
    public barChartLabels:string[];
    public barChartType:string;
    public barChartLegend:boolean;
    public barChartData:any[];
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    ngOnInit() {
        
        this.barChartLabels = Object
            .keys(this.chartValues.progressionInfo.progressionByUniversity)
            .concat(Object.keys(this.chartValues.progressionInfo.progressionByIT))
            .concat(Object.keys(this.chartValues.progressionInfo.progressionByCollege));

        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            {
                data: Object.keys(this.chartValues.progressionInfo.progressionByUniversity)
                    .map(k => this.chartValues.progressionInfo.progressionByUniversity[k])
                    .concat(Object.keys(this.chartValues.progressionInfo.progressionByIT)
                            .map(k => this.chartValues.progressionInfo.progressionByIT[k]))
                    .concat(Object.keys(this.chartValues.progressionInfo.progressionByCollege)
                            .map(k => this.chartValues.progressionInfo.progressionByCollege[k])),
                label:'Percent who Dropout'}
        ];
    }
  // events
  public chartClicked(e:any):void {
    // console.log(e);
  }

  public chartHovered(e:any):void {
    // console.log(e);
  }
}
