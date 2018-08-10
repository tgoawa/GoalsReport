import { Component, OnInit } from '@angular/core';
import { ChartData, SurveyDataObject } from '../../core/model/goal-report.model';
import { DataService } from 'src/app/core/services/data.service';
import { FormatHelper } from 'src/app/core/helper/formatHelper';

@Component({
  selector: 'app-industry-spent-time-in',
  templateUrl: './industry-spent-time-in.component.html',
  styleUrls: ['./industry-spent-time-in.component.css']
})
export class IndustrySpentTimeInComponent implements OnInit {
  industrySpentTimeChart: ChartData[];

  constructor(private dataService: DataService, private formatHelper: FormatHelper) { }

  ngOnInit() {
    this.dataService.getSurveyData()
      .subscribe((data: SurveyDataObject) => {
        this.industrySpentTimeChart = this.formatHelper.formatSimpleChartData(data.ITSpentTime);
      });
  }

}
