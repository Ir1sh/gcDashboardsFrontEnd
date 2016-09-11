import {Component, Input} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import '../../../../../../node_modules/chart.js/dist/Chart.bundle.min.js';
import {CHART_DIRECTIVES} from 'ng2-charts';

// webpack html imports
let template = require('./chart-one.html');

@Component({
    selector: 'school-evaluation-chart-one',
  template: template,
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class SchoolEvaluationsChartOne {
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
        
        this.barChartLabels = [
            'Students Sitting Leaving Cert',
            'Number Accepting Places',
            'University',
            'Institute of Technology',
            'College'
        ];

        this.barChartType = 'bar';
        this.barChartLegend = true;
        console.log('CHART VALUES', this.chartValues);
        this.barChartData = [
            {
                data: [
                    this.chartValues.progressionInfo.anosittinglc,
                    this.chartValues.progressionInfo.b1noacceptingplaces2015calc,
                    this.chartValues.progressionInfo.progressionInfo.noprogresstouni,
                    this.chartValues.progressionInfo.progressionInfo.noprogresstoit,
                    this.chartValues.progressionInfo.progressionInfo.noprogresstocol],
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
