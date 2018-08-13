import { Component, OnInit } from '@angular/core';
import { ChartData, SurveyDataObject } from '../../core/model/goal-report.model';
import { DataService } from '../../core/services/data.service';
import { FormatHelper } from '../../core/helper/formatHelper';
import { TeamMember } from 'src/app/core/model/teamMember.model';

@Component({
  selector: 'app-industry-learn-about',
  templateUrl: './industry-learn-about.component.html',
  styleUrls: ['./industry-learn-about.component.css']
})
export class IndustryLearnAboutComponent implements OnInit {
  industryLearnChart: ChartData[];
  questionId: number;
  teamMemberList: TeamMember[];

  constructor(private dataService: DataService, private formatHelper: FormatHelper) { }

  ngOnInit() {
    this.dataService.getSurveyData()
      .subscribe((data: SurveyDataObject) => {
        this.industryLearnChart = this.formatHelper.formatSimpleChartData(data.ITLearn);
        this.questionId = data.ITLearn[0].QuestionId;
      });
  }

  onSelect(event: ChartData) {
    this.getTeamMembers(event.name);
  }

  private getTeamMembers(name: string) {
    this.dataService
      .getTeamMembers(this.questionId, name)
      .subscribe((data: TeamMember[]) => {
        this.teamMemberList = data;
      });
  }

}
