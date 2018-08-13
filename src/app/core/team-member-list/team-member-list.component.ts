import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TeamMember } from '../model/teamMember.model';
import { MatPaginator } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.css']
})
export class TeamMemberListComponent implements OnInit {
  @Input() teamMemberList: TeamMember;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = [
    'LastName',
    'FirstName'
  ];

  constructor() { }

  ngOnInit() {
  }

}
