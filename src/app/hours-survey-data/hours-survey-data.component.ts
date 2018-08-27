import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { SurveyDataObject, ChartData } from '../core/model/goal-report.model';
import { TeamMember } from '../core/model/teamMember.model';

@Component({
  selector: 'app-hours-survey-data',
  templateUrl: './hours-survey-data.component.html',
  styleUrls: ['./hours-survey-data.component.css'],
})
export class HoursSurveyDataComponent implements OnInit {
  hoursSurveyObject: SurveyDataObject;
  questionId: number;
  timeInIndustryChart: ChartData[];
  teamMemberList: TeamMember[];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getHoursSurveyData();
  }

  getHoursSurveyData() {
    this.dataService.getSurveyData().subscribe((data: SurveyDataObject) => {
      this.hoursSurveyObject = data;
      this.formatTimeInIndustryTeam(this.hoursSurveyObject);
    });
  }

  onSelectedData(event: ChartData) {
    if (event.name === 'Yes') {
      this.getExpertiseNames(true);
    } else if (event.name === 'No') {
      this.getExpertiseNames(false);
    } else {
      return;
    }
  }

  private getExpertiseNames(IsExpert: boolean) {
    this.dataService
      .getExpertiseNames(IsExpert)
      .subscribe((data: TeamMember[]) => {
        this.teamMemberList = data;
      });
  }

  private formatTimeInIndustryTeam(surveyDataObject: SurveyDataObject) {
    this.timeInIndustryChart = [];
    this.timeInIndustryChart.push(
      new ChartData('No', surveyDataObject.ExpertiseNoCount)
    );
    this.timeInIndustryChart.push(
      new ChartData('Yes', surveyDataObject.ExpertiseYesCount)
    );
    this.questionId = surveyDataObject.QuestionId;
  }
}
