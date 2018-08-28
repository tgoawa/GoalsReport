import { Component, OnInit } from '@angular/core';
import {
  ChartData,
  SurveyDataObject,
  ChartObject,
} from '../../core/model/goal-report.model';
import { DataService } from 'src/app/core/services/data.service';
import { FormatHelper } from 'src/app/core/helper/formatHelper';
import { TeamMember } from 'src/app/core/model/teamMember.model';

@Component({
  selector: 'app-opportunity-advisories',
  templateUrl: './opportunity-advisories.component.html',
  styleUrls: ['./opportunity-advisories.component.css'],
})
export class OpportunityAdvisoriesComponent implements OnInit {
  opportunityAdvisories: ChartData[];
  questionId: number;
  teamMemberList: TeamMember[];

  constructor(
    private dataService: DataService,
    private formatHelper: FormatHelper
  ) {}

  ngOnInit() {
    this.dataService.getSurveyData().subscribe((data: SurveyDataObject) => {
      this.opportunityAdvisories = this.formatHelper.formatSimpleChartData(
        data.OpportunityAdvisories
      );
      this.questionId = data.OpportunityAdvisories[0].QuestionId;
    });
  }

  onSelect(event: ChartData) {
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
