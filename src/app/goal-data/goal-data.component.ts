import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { GoalReport } from '../core/model/goal-report.model';

@Component({
  selector: 'app-goal-data',
  templateUrl: './goal-data.component.html',
  styleUrls: ['./goal-data.component.css'],
})
export class GoalDataComponent implements OnInit {
  date;
  goalReport: GoalReport;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.date = new Date();
  }

  getGoalReportData(dateFrom: string) {
    const parsedDate = new Date(dateFrom);
    this.dataService.getGoalReportData(parsedDate.toDateString())
      .subscribe((data: GoalReport) => this.goalReport = { ...data });
  }

}
