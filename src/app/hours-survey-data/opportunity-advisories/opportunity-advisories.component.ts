import { Component, OnInit } from '@angular/core';
import { ChartData } from '../../core/model/goal-report.model';

@Component({
  selector: 'app-opportunity-advisories',
  templateUrl: './opportunity-advisories.component.html',
  styleUrls: ['./opportunity-advisories.component.css']
})
export class OpportunityAdvisoriesComponent implements OnInit {
  opportunityAdvisories: ChartData[];
  constructor() { }

  ngOnInit() {
  }

}
