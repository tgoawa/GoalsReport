import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { TeamMember } from '../model/teamMember.model';
import { MatPaginator, MatTableDataSource } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.css']
})
export class TeamMemberListComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<TeamMember>;
  displayedColumns = [
    'LastName',
    'FirstName'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
