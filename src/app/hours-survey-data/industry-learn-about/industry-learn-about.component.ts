import { Component, OnInit } from '@angular/core';
import { ChartData } from '../../core/model/goal-report.model';

@Component({
  selector: 'app-industry-learn-about',
  templateUrl: './industry-learn-about.component.html',
  styleUrls: ['./industry-learn-about.component.css']
})
export class IndustryLearnAboutComponent implements OnInit {
  industryLearnChart: ChartData[];
  constructor() { }

  ngOnInit() {
  }

}
