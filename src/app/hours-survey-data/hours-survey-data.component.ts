import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { SurveyDataObject, ChartData } from '../core/model/goal-report.model';
import { FormatHelper } from '../core/helper/formatHelper';

@Component({
  selector: 'app-hours-survey-data',
  templateUrl: './hours-survey-data.component.html',
  styleUrls: ['./hours-survey-data.component.css']
})
export class HoursSurveyDataComponent implements OnInit {
  hoursSurveyObject: SurveyDataObject;
  timeInIndustryChart: ChartData[];
  industrySpentTimeChart: ChartData[];
  industryLearnChart: ChartData[];
  serviceLineAlignment: ChartData[];
  assuranceChart: ChartData[];
  accountingChart: ChartData[];
  specialtyServiceChart: ChartData[];
  taxChart: ChartData[];

  constructor(private dataService: DataService, private formatHelper: FormatHelper) { }

  ngOnInit() {
    this.getHoursSurveyData();
  }

  getHoursSurveyData() {
    this.dataService.getSurveyData()
      .subscribe((data: SurveyDataObject) => {
        this.hoursSurveyObject = data;
        this.formatTimeInIndustryTeam(this.hoursSurveyObject);
        this.industrySpentTimeChart = this.formatHelper.formatSimpleChartData(this.hoursSurveyObject.ITSpentTime);
        this.industryLearnChart = this.formatHelper.formatSimpleChartData(this.hoursSurveyObject.ITLearn);
        this.serviceLineAlignment = this.formatHelper.formatSimpleChartData(this.hoursSurveyObject.ServiceLineAlignment);
        this.formatSubGroupExpertise(this.hoursSurveyObject.SubGroupExpertises);
      });
  }

  private formatTimeInIndustryTeam(surveyDataObject: SurveyDataObject) {
    this.timeInIndustryChart = [];
    this.timeInIndustryChart.push(new ChartData('No', surveyDataObject.ExpertiseNoCount));
    this.timeInIndustryChart.push(new ChartData('Yes', surveyDataObject.ExpertiseYesCount));
  }

  private formatSubGroupExpertise(dataArray: any[]) {
    if (dataArray === null) {
      return;
    } else {
      for (let x = 0; x < dataArray.length; x++) {
        if (dataArray[x].ServiceLine = 'Assurance') {
          this.assuranceChart.push(new ChartData(dataArray[x].SubGroup, dataArray[x].Value));
        }
        if (dataArray[x].ServiceLine = 'Accounting') {
          this.accountingChart.push(new ChartData(dataArray[x].SubGroup, dataArray[x].Value));
        }
        if (dataArray[x].ServiceLine = 'Specialty Services') {
          this.specialtyServiceChart.push(new ChartData(dataArray[x].SubGroup, dataArray[x].Value));
        }
        if (dataArray[x].ServiceLine = 'Tax') {
          this.taxChart.push(new ChartData(dataArray[x].SubGroup, dataArray[x].Value));
        }
      }
    }
  }

}
