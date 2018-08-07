import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import {
  OneToOneReport,
  ChartData,
} from '../core/model/goal-report.model';

@Component({
  selector: 'app-one-to-one-data',
  templateUrl: './one-to-one-data.component.html',
  styleUrls: ['./one-to-one-data.component.css'],
})
export class OneToOneDataComponent implements OnInit {
  oneToOneReportObject: OneToOneReport[];
  chartData: ChartData[];
  months: number;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.months = 6;
    this.getOneToOneReportData(this.months);
  }

  onMonthChange() {
    console.log(this.months);
    this.getOneToOneReportData(this.months);
  }

  getOneToOneReportData(totalMonths: number) {
    this.dataService
      .getOneToOneReportData(totalMonths)
      .subscribe((data: OneToOneReport[]) => {
        console.log(data);
        this.oneToOneReportObject = data;
        this.formatDataForGraph(this.oneToOneReportObject);
      });
  }

  private formatDataForGraph(reportObject: OneToOneReport[]) {
    this.chartData = [];
    if (reportObject !== null) {
      for (let x = 0; x < reportObject.length; x++) {
        this.chartData.push(
          new ChartData(
            reportObject[x].MonthName,
            reportObject[x].MeetingCount
          )
        );
      }
    }
  }
}
