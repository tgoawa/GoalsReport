export interface LookUps {
  Locations: ILocations[];
  BusinessUnits: IBusinessUnits[];
}

export interface ILocations {
  LocationId: number;
  Name: string;
}

export interface IBusinessUnits {
  BusinessUnitId: number;
  Name: string;
}
