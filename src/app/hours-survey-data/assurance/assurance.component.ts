import { Component, OnInit } from '@angular/core';
import { ChartData } from '../../core/model/goal-report.model';

@Component({
  selector: 'app-assurance',
  templateUrl: './assurance.component.html',
  styleUrls: ['./assurance.component.css']
})
export class AssuranceComponent implements OnInit {
  assuranceChart: ChartData[];
  constructor() { }

  ngOnInit() {
  }

}
