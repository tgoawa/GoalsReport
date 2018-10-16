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
  filteredTeamMemberList: TeamMember[];

  private teamMemberList: TeamMember[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  getTeamMembers() {

  }

}
