import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';
import { TeamMember } from '../model/teamMember.model';
import { MatPaginator, MatTableDataSource } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.css'],
})
export class TeamMemberListComponent implements AfterViewInit {
  @Input() teamMemberList: TeamMember[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<TeamMember>;

  displayedColumns = [
    'LastName',
    'FirstName'
  ];

  constructor() { }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.teamMemberList);
    this.dataSource.paginator = this.paginator;
  }

}
