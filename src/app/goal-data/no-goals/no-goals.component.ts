import { Component, OnInit } from '@angular/core';
import { TeamMember, TeamMemberExport } from 'src/app/core/model/teamMember.model';
import { DataService } from 'src/app/core/services/data.service';
import { LookUps, IBusinessUnits, ILocations } from 'src/app/core/model/lookup.model';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-no-goals',
  templateUrl: './no-goals.component.html',
  styleUrls: ['./no-goals.component.css']
})
export class NoGoalsComponent implements OnInit {
  dataTitle = 'Team Members that have not created any goals';
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

  private teamMemberList: TeamMember[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getLookUps();
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
    this.teamMemberList.forEach((teamMember: TeamMember) => {
      if (teamMember.BusinessUnitId === businessUnit.value) {
        this.filteredTeamMemberList.push(teamMember);
      }
    });
  }

  onLocationSelected(location) {
    this.filteredTeamMemberList = [];
    this.teamMemberList.forEach((teamMember: TeamMember) => {
      if (teamMember.LocationId === location.value) {
        this.filteredTeamMemberList.push(teamMember);
      }
    });
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
