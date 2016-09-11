import {Component, Input} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import '../../../../../../node_modules/chart.js/dist/Chart.bundle.min.js';
import {CHART_DIRECTIVES} from 'ng2-charts';

// webpack html imports
let template = require('./chart-three.html');

@Component({
    selector: 'dor-chart-three',
  template: template,
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DorChartThree {
    @Input() chartValues:any = {};
    @Input() sector:any = {};
    @Input() inst:any = {};
    @Input() grade:any = {};
    @Input() gender:any = {};
    
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
            'Dropped out of InstType',
            'Did not drop out of InstType'
            ];

        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            {
                data: [
                    this.chartValues.droppedOut,
                    this.chartValues.didNotDropOut],
                label:'Dropout numbers by Institution type'}
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
