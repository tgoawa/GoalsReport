import { Component, OnInit } from '@angular/core';
import { ChartData, SurveyDataObject } from '../../core/model/goal-report.model';
import { DataService } from 'src/app/core/services/data.service';
import { FormatHelper } from 'src/app/core/helper/formatHelper';
import { TeamMember } from 'src/app/core/model/teamMember.model';

@Component({
  selector: 'app-learning-advisories',
  templateUrl: './learning-advisories.component.html',
  styleUrls: ['./learning-advisories.component.css']
})
export class LearningAdvisoriesComponent implements OnInit {
  learningAdvisories: ChartData[];
  questionId: number;
  teamMemberList: TeamMember[];

  constructor(private dataService: DataService, private formatHelper: FormatHelper) { }

  ngOnInit() {
    this.dataService.getSurveyData()
      .subscribe((data: SurveyDataObject) => {
        this.learningAdvisories = this.formatHelper.formatSimpleChartData(data.LearningAdvisories);
        this.questionId = data.LearningAdvisories[0].QuestionId;
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
