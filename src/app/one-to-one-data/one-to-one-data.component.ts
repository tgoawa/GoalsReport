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
  chartData: ChartData[] = [];
  months: number;

  view: number[] = [700, 300];
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showXAxisLabel = true;
    xAxisLabel = 'Months';
    showYAxisLabel = true;
    yAxisLabel = 'Meetings';
  colorScheme = {
    domain: ['#007EBA', '#5FBB46', '#F7941E', '#7F3F98', '#00AFED', '#CBDB2A', '#FFC60B', '#ED0D6C']
  };

  autoScale = true;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.months = 6;
    this.getOneToOneReportData(this.months);
  }

  getOneToOneReportData(totalMonths: number) {
    this.dataService
      .getOneToOneReportData(totalMonths)
      .subscribe((data: OneToOneReport[]) => {
        this.oneToOneReportObject = data;
        this.formatDataForGraph(this.oneToOneReportObject);
      });
  }

  private formatDataForGraph(reportObject: OneToOneReport[]) {
    if (reportObject !== null) {
      for (let x = 0; x < reportObject.length; x++) {
        this.chartData.push(
          new ChartData(
            reportObject[x].MonthName,
            reportObject[x].MeetingCount
          )
        );
      }
      console.log(this.chartData);
    }
  }
}
