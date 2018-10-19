import { Component, OnChanges, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { TeamMember } from '../../model/teamMember.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-team-member-table',
  templateUrl: './team-member-table.component.html',
  styleUrls: ['./team-member-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamMemberTableComponent implements OnChanges {
  @Input() dataSource: TeamMember[];
  @Input() title: string;
  teamMemberList: MatTableDataSource<TeamMember>;
  displayedColumns = [
    'LastName',
    'FirstName',
    'Location',
    'BusinessUnit'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnChanges() {
    this.teamMemberList = new MatTableDataSource<TeamMember>(this.dataSource);
    this.teamMemberList.paginator = this.paginator;
  }

}
