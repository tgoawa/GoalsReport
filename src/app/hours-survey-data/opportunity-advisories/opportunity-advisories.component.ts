import { Component, OnInit } from '@angular/core';
import { ChartData, SurveyDataObject } from '../../core/model/goal-report.model';
import { DataService } from 'src/app/core/services/data.service';
import { FormatHelper } from 'src/app/core/helper/formatHelper';

@Component({
  selector: 'app-opportunity-advisories',
  templateUrl: './opportunity-advisories.component.html',
  styleUrls: ['./opportunity-advisories.component.css']
})
export class OpportunityAdvisoriesComponent implements OnInit {
  opportunityAdvisories: ChartData[];

constructor(private dataService: DataService, private formatHelper: FormatHelper) { }

  ngOnInit() {
    this.dataService.getSurveyData()
      .subscribe((data: SurveyDataObject) => {
        this.opportunityAdvisories = this.formatHelper.formatSimpleChartData(data.OpportunityAdvisories);
      });
  }

}
