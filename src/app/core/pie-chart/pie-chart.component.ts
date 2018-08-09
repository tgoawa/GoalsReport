import { Component, OnInit, Input } from '@angular/core';
import { ChartData } from 'src/app/core/model/goal-report.model';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() data: ChartData;
  view: any[] = [700, 400];
  // options
  showLegend = false;

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

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  constructor() { }

  ngOnInit() {
  }

}
