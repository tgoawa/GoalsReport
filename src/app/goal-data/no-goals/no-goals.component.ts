import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/core/model/teamMember.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-no-goals',
  templateUrl: './no-goals.component.html',
  styleUrls: ['./no-goals.component.css']
})
export class NoGoalsComponent implements OnInit {
  dataTitle = 'Team Members that have not created any goals';
  filterByOption = 'none';
  filteredTeamMemberList: TeamMember[];

  private teamMemberList: TeamMember[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTeamMembers();
  }

  getTeamMembers() {
    this.dataService.getNoGoalsTeamMembers()
      .subscribe((data: TeamMember[]) => {
        this.teamMemberList = data;
        this.filteredTeamMemberList = this.teamMemberList;
      }, error => {
        console.error(error);
      });
  }

}
