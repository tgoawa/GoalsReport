import { Component, OnInit } from '@angular/core';
import { ChartData, SurveyDataObject } from '../../core/model/goal-report.model';
import { DataService } from 'src/app/core/services/data.service';
import { FormatHelper } from 'src/app/core/helper/formatHelper';

@Component({
  selector: 'app-learning-advisories',
  templateUrl: './learning-advisories.component.html',
  styleUrls: ['./learning-advisories.component.css']
})
export class LearningAdvisoriesComponent implements OnInit {
  learningAdvisories: ChartData[];

  constructor(private dataService: DataService, private formatHelper: FormatHelper) { }

  ngOnInit() {
    this.dataService.getSurveyData()
      .subscribe((data: SurveyDataObject) => {
        this.learningAdvisories = this.formatHelper.formatSimpleChartData(data.LearningAdvisories);
      });
  }

}
