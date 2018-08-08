export interface GoalReport {
  FromDate: string;
  GoalCount: number;
}

export interface OneToOneCountPerMonth {
  Month: number;
  MonthName: string;
  Year: number;
  MeetingCount: number;
}

export interface OneToOneReport {
  TotalMeetingsPerMonth: OneToOneCountPerMonth[];
  DistinctMeetingsPerMonth: OneToOneCountPerMonth[];
}

export class ChartData {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}

export class HoursChartData {
  name: string;
  series: ChartData[];

  constructor(name: string) {
    this.name = name;
  }
}
