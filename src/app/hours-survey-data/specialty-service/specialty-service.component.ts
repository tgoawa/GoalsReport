import { Component, OnInit } from '@angular/core';
import { ChartData, SurveyDataObject, ChartObject } from '../../core/model/goal-report.model';
import { DataService } from 'src/app/core/services/data.service';
import { TeamMember } from '../../core/model/teamMember.model';

@Component({
  selector: 'app-specialty-service',
  templateUrl: './specialty-service.component.html',
  styleUrls: ['./specialty-service.component.css']
})
export class SpecialtyServiceComponent implements OnInit {
  dataTitle: string;
  specialtyServiceChart: ChartData[];
  questionId: number;
  teamMemberList: TeamMember[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSurveyData()
      .subscribe((data: SurveyDataObject) => {
        this.formatSubGroupExpertise(data.SubGroupExpertises);
        this.questionId = data.SubGroupExpertises[0].QuestionId;
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

  private formatSubGroupExpertise(dataArray: any[]) {
    if (dataArray === null) {
      return;
    } else {
      this.specialtyServiceChart = [];
      for (let x = 0; x < dataArray.length; x++) {
        if (dataArray[x].ServiceLine === 'Specialty Services') {
          this.specialtyServiceChart.push(new ChartData(dataArray[x].SubGroup, dataArray[x].Value));
        }
      }
    }
  }

}
