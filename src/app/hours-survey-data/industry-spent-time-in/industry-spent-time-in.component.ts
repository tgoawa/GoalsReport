import { Component, OnInit } from '@angular/core';
import { ChartData } from '../../core/model/goal-report.model';

@Component({
  selector: 'app-industry-spent-time-in',
  templateUrl: './industry-spent-time-in.component.html',
  styleUrls: ['./industry-spent-time-in.component.css']
})
export class IndustrySpentTimeInComponent implements OnInit {
  industrySpentTimeChart: ChartData[];
  constructor() { }

  ngOnInit() {
  }

}
