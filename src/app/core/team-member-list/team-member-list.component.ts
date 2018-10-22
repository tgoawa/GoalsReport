import { Component, OnChanges, Input, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import { TeamMember, TeamMemberExport } from '../model/teamMember.model';
import { IBusinessUnits, ILocations, LookUps } from '../model/lookup.model';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamMemberListComponent implements OnChanges {
  @Input() dataSource: TeamMember[];
  @Input() title: string;
  filterByOption = 'none';
  businessUnits: IBusinessUnits[];
  locations: ILocations[];
  filteredTeamMemberList: TeamMember[];
  filterByBusinessUnitOption: number;
  filterByLocationOption: number;

  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    useBom: true,
    noDownload: false,
    headers: ['First Name', 'Last Name', 'Location', 'Business Unit']
  };


  constructor(private dataService: DataService) { }

  ngOnChanges() {
    this.getLookUps();
    this.filteredTeamMemberList = this.dataSource;
  }

  getLookUps() {
    this.dataService.getLookupLists()
      .subscribe((data: LookUps) => {
        this.businessUnits = data.BusinessUnits;
        this.locations = data.Locations;
      }, error => {
        console.error(error);
      });
  }

  onBusinessUnitSelected(businessUnit) {
    this.filteredTeamMemberList = [];
    this.dataSource.forEach((teamMember: TeamMember) => {
      if (teamMember.BusinessUnitId === businessUnit.value) {
        this.filteredTeamMemberList.push(teamMember);
      }
    });
  }

  onLocationSelected(location) {
    this.filteredTeamMemberList = [];
    this.dataSource.forEach((teamMember: TeamMember) => {
      if (teamMember.LocationId === location.value) {
        this.filteredTeamMemberList.push(teamMember);
      }
    });
  }

  onRadioChanged() {
    if (this.filterByOption === 'none') {
      this.filteredTeamMemberList = this.dataSource;
    }
  }
  onExportCSV() {
    // tslint:disable-next-line:no-unused-expression
    new Angular5Csv(this.createExportData(this.filteredTeamMemberList), 'Team Member List', this.csvOptions);
  }

  private createExportData(teamMemberList: TeamMember[]): TeamMemberExport[] {
    const exportData = [];

    if (teamMemberList.length > 0) {
      for (const teamMember of teamMemberList) {
        exportData.push(new TeamMemberExport(teamMember.FirstName,
          teamMember.LastName,
          teamMember.LocationName,
          teamMember.BusinessUnitName));
      }

      return exportData;
    } else {
      return;
    }
  }
}
