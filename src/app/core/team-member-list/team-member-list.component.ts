import { Component, OnChanges, Input, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import { TeamMember } from '../model/teamMember.model';
import { MatPaginator, MatTableDataSource } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamMemberListComponent implements OnChanges {
  @Input() dataSource: TeamMember[];
  teamMemberList: MatTableDataSource<TeamMember>;
  displayedColumns = [
    'LastName',
    'FirstName'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnChanges() {
    this.teamMemberList = new MatTableDataSource<TeamMember>(this.dataSource);
    this.teamMemberList.paginator = this.paginator;
  }
}
