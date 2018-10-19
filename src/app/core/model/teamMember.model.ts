export interface TeamMember {
  FirstName: string;
  LastName: string;
  LocationId: number;
  LocationName: string;
  BusinessUnitId: number;
  BusinessUnitName: string;
}

export class TeamMemberExport {
  FirstName: string;
  LastName: string;
  LocationName: string;
  BusinessUnitName: string;

  constructor(firstName, lastName, locationName, businessUnitName) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.LocationName = locationName;
    this.BusinessUnitName = businessUnitName;
  }
}
