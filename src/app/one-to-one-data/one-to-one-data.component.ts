import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import {
  OneToOneReport,
  HoursChartData,
  ChartData,
  OneToOneDTO,
} from '../core/model/goal-report.model';
import { OneToOneTeamMembers } from '../core/model/teamMember.model';

@Component({
  selector: 'app-one-to-one-data',
  templateUrl: './one-to-one-data.component.html',
  styleUrls: ['./one-to-one-data.component.css'],
})
export class OneToOneDataComponent implements OnInit {
  createdMeetingTitle = 'Team Members that have created meetings this month';
  didNotCreateMeetingTitle = 'Team Members that did not create meetings';
  oneToOneReportObject: OneToOneReport;
  chartData: HoursChartData[];
  months: number;
  oneToOneTeammembers: OneToOneTeamMembers;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.months = 6;
    this.getOneToOneReportData(this.months);
  }

  getOneToOneReportData(totalMonths: number) {
    this.dataService
      .getOneToOneReportData(totalMonths)
      .subscribe((data: OneToOneReport) => {
        this.oneToOneReportObject = data;
        this.formatDataForGraph(this.oneToOneReportObject);
      });
  }

  onMonthChange() {
    console.log(this.months);
    this.getOneToOneReportData(this.months);
  }

  onSelect(event: ChartData) {
    let tempData = [];
    tempData = event.name.split(' ');
    const oneToOneDTO = new OneToOneDTO(tempData[0], tempData[1]);
    this.getOneToOneTeamMembers(oneToOneDTO);
  }

  private formatDataForGraph(reportObject: OneToOneReport) {
    if (reportObject === null) {
      return;
    } else {
      this.createChartDataObject(reportObject);
    }
  }

  private getOneToOneTeamMembers(oneToOneDTO: OneToOneDTO) {
    this.dataService.getMeetingTeamMembers(oneToOneDTO)
      .subscribe((data: OneToOneTeamMembers) => {
        this.oneToOneTeammembers = data;
      }, error => {
        console.error(error);
      });
  }

  private createChartDataObject(reportObject: OneToOneReport) {
    this.chartData = [];
    this.chartData.push(new HoursChartData('Total Meetings Per Month'));
    this.chartData.push(new HoursChartData('Number of team members Per Month'));

    this.chartData[0].series = [];
    this.chartData[1].series = [];

    for (let x = 0; x < reportObject.TotalMeetingsPerMonth.length; x++) {
      // tslint:disable-next-line:max-line-length
      this.chartData[0].series.push(new ChartData(reportObject.TotalMeetingsPerMonth[x].MonthName + ' ' + reportObject.TotalMeetingsPerMonth[x].Year, reportObject.TotalMeetingsPerMonth[x].MeetingCount));
    }

    for (let y = 0; y < reportObject.DistinctMeetingsPerMonth.length; y++) {
      // tslint:disable-next-line:max-line-length
      this.chartData[1].series.push(new ChartData(reportObject.DistinctMeetingsPerMonth[y].MonthName + ' ' + reportObject.DistinctMeetingsPerMonth[y].Year, reportObject.DistinctMeetingsPerMonth[y].MeetingCount));
    }
  }
}
