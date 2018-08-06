export interface GoalReport {
  FromDate: string;
  GoalCount: number;
}

export interface OneToOneReport {
  Month: number;
  MonthName: string;
  Year: number;
  MeetingCount: number;
}

export class ChartData {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}
