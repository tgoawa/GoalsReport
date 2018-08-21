import { Component, OnInit, AfterViewInit, Input, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TeamMember } from '../model/teamMember.model';
import { MatPaginator, MatTableDataSource } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamMemberListComponent implements OnInit, AfterViewInit {
  @Input() teamMemberList: TeamMember[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<TeamMember>;

  displayedColumns = [
    'LastName',
    'FirstName'
  ];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.teamMemberList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.cd.detectChanges();
  }

}
