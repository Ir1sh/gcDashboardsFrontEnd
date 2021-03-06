import {Component, Input} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import '../../../../../../node_modules/chart.js/dist/Chart.bundle.min.js';
import {CHART_DIRECTIVES} from 'ng2-charts';

// webpack html imports
let template = require('./chart-one.html');

@Component({
    selector: 'dor-chart-one',
  template: template,
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DorChartOne {
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
            'overall',
            'InstType',
            this.inst.name,
            this.inst.name + ' in ',
            this.inst.name + ' in '];

        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            {
                data: [
                    this.chartValues.overall,
                    this.chartValues.byInstitutionType,
                    this.chartValues.bySector,
                    this.chartValues.bySectorAndInstitutionType,
                    this.chartValues.bySectorInInstitution],
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
