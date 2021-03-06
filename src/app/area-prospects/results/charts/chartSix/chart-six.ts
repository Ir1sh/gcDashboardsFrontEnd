import {Component, Input} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import '../../../../../../node_modules/chart.js/dist/Chart.bundle.min.js';
import {CHART_DIRECTIVES} from 'ng2-charts';

// webpack html imports
let template = require('./chart-six.html');

@Component({
    selector: 'area-prospects-chart-six',
  template: template,
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class AreaProspectsChartSix {
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
            'reportingadminstaffavailablepercent',
            'reportingteachingstaffavailablepercent',
            'reportingfriendlyrelationshipswithotherstudentspercent',
            'verymuchsupporttosocalisepercent',
            'academicchallengepercent',
            'supportivelearningenvironmentpercent',
            'satisfactionpercent',
        ];

        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            {
                data: this.barChartLabels.map(k => this.chartValues[k]),
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
