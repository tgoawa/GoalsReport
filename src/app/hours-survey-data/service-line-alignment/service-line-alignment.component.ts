import { Component, OnInit } from '@angular/core';
import { ChartData, SurveyDataObject } from '../../core/model/goal-report.model';
import { DataService } from 'src/app/core/services/data.service';
import { FormatHelper } from 'src/app/core/helper/formatHelper';
import { TeamMember } from 'src/app/core/model/teamMember.model';

@Component({
  selector: 'app-service-line-alignment',
  templateUrl: './service-line-alignment.component.html',
  styleUrls: ['./service-line-alignment.component.css']
})
export class ServiceLineAlignmentComponent implements OnInit {
  serviceLineAlignment: ChartData[];
  questionId: number;
  teamMemberList: TeamMember[];

  constructor(private dataService: DataService, private formatHelper: FormatHelper) { }

  ngOnInit() {
    this.dataService.getSurveyData()
      .subscribe((data: SurveyDataObject) => {
        this.serviceLineAlignment = this.formatHelper.formatSimpleChartData(data.ServiceLineAlignment);
        this.questionId = data.ServiceLineAlignment[0].QuestionId;
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
