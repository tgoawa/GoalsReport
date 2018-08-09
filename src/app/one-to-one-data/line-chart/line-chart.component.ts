import { Component, OnChanges, Input } from '@angular/core';
import { ChartData } from 'src/app/core/model/goal-report.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnChanges {
  @Input() data: ChartData[];
  chartData: ChartData[];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Months';
  showYAxisLabel = true;
  yAxisLabel = 'Meetings';

  colorScheme = {
    domain: ['#007EBA',
    '#5FBB46',
    '#F7941E',
    '#7F3F98',
    '#00AFED',
    '#CBDB2A',
    '#FFC60B',
    '#ED0D6C', ]
  };

  // line, area
  autoScale = true;
  constructor() { }

  ngOnChanges() {
    this.chartData = this.data;
  }

}
