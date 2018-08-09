import { Component, OnInit, Input } from '@angular/core';
import { ChartData } from 'src/app/core/model/goal-report.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() data: ChartData[];

  view: any[] = [700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Months';
  showYAxisLabel = true;
  yAxisLabel = 'Meetings';
  colorScheme = {
    domain: [
      '#007EBA',
      '#5FBB46',
      '#F7941E',
      '#7F3F98',
      '#00AFED',
      '#CBDB2A',
      '#FFC60B',
      '#ED0D6C',
    ],
  };
  constructor() { }

  ngOnInit() {
  }

}
