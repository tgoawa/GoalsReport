import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { SurveyDataObject } from '../core/model/goal-report.model';

@Component({
  selector: 'app-hours-survey-data',
  templateUrl: './hours-survey-data.component.html',
  styleUrls: ['./hours-survey-data.component.css']
})
export class HoursSurveyDataComponent implements OnInit {
  hoursSurveyObject: SurveyDataObject;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getHoursSurveyData();
  }

  getHoursSurveyData() {
    this.dataService.getSurveyData()
      .subscribe((data: SurveyDataObject) => this.hoursSurveyObject = { ...data });
  }

}
