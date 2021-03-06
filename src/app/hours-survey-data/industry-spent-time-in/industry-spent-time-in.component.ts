import { Component, OnInit } from '@angular/core';
import {
  ChartData,
  SurveyDataObject,
  ChartObject,
} from '../../core/model/goal-report.model';
import { DataService } from 'src/app/core/services/data.service';
import { FormatHelper } from 'src/app/core/helper/formatHelper';
import { TeamMember } from '../../core/model/teamMember.model';

@Component({
  selector: 'app-industry-spent-time-in',
  templateUrl: './industry-spent-time-in.component.html',
  styleUrls: ['./industry-spent-time-in.component.css'],
})
export class IndustrySpentTimeInComponent implements OnInit {
  industrySpentTimeChart: ChartData[];
  dataTitle: string;
  questionId: number;
  teamMemberList: TeamMember[];

  constructor(
    private dataService: DataService,
    private formatHelper: FormatHelper
  ) {}

  ngOnInit() {
    this.dataService.getSurveyData().subscribe((data: SurveyDataObject) => {
      this.industrySpentTimeChart = this.formatHelper.formatSimpleChartData(
        data.ITSpentTime
      );
      this.questionId = data.ITSpentTime[0].QuestionId;
    });
  }

  onSelect(event: ChartData) {
    this.dataTitle = event.name;
    this.getTeamMembers(event.name);
  }

  private getTeamMembers(name: string) {
    this.dataService
      .getTeamMembers(new ChartObject(this.questionId, name))
      .subscribe((data: TeamMember[]) => {
        this.teamMemberList = data;
      });
  }
}
