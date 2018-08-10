import { Component, OnInit } from '@angular/core';
import { ChartData } from '../../core/model/goal-report.model';

@Component({
  selector: 'app-learning-advisories',
  templateUrl: './learning-advisories.component.html',
  styleUrls: ['./learning-advisories.component.css']
})
export class LearningAdvisoriesComponent implements OnInit {
  learningAdvisories: ChartData[];
  constructor() { }

  ngOnInit() {
  }

}
