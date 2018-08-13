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
  questionId: number;
  timeInIndustryChart: ChartData[];

  constructor(private dataService: DataService, private formatHelper: FormatHelper) { }

  ngOnInit() {
    this.getHoursSurveyData();
  }

  getHoursSurveyData() {
    this.dataService.getSurveyData()
      .subscribe((data: SurveyDataObject) => {
        this.hoursSurveyObject = data;
        this.formatTimeInIndustryTeam(this.hoursSurveyObject);
      });
  }

  private formatTimeInIndustryTeam(surveyDataObject: SurveyDataObject) {
    this.timeInIndustryChart = [];
    this.timeInIndustryChart.push(new ChartData('No', surveyDataObject.ExpertiseNoCount));
    this.timeInIndustryChart.push(new ChartData('Yes', surveyDataObject.ExpertiseYesCount));
    this.questionId = surveyDataObject.QuestionId;
  }
}
