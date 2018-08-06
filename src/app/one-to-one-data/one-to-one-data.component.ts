import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { OneToOneReport } from '../core/model/goal-report.model';

@Component({
  selector: 'app-one-to-one-data',
  templateUrl: './one-to-one-data.component.html',
  styleUrls: ['./one-to-one-data.component.css']
})
export class OneToOneDataComponent implements OnInit {
  oneToOneReport: OneToOneReport;
  months: number;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.months = 6;
    this.getOneToOneReportData(this.months);
  }

  getOneToOneReportData(totalMonths: number) {
    this.dataService.getOneToOneReportData(totalMonths)
    .subscribe((data: OneToOneReport) => this.oneToOneReport = { ...data });
  }

}
