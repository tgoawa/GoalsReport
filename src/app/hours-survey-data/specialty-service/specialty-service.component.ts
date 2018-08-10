import { Component, OnInit } from '@angular/core';
import { ChartData } from '../../core/model/goal-report.model';

@Component({
  selector: 'app-specialty-service',
  templateUrl: './specialty-service.component.html',
  styleUrls: ['./specialty-service.component.css']
})
export class SpecialtyServiceComponent implements OnInit {
  specialtyServiceChart: ChartData[];
  constructor() { }

  ngOnInit() {
  }

}
