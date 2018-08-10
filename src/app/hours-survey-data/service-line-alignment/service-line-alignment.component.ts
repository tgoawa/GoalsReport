import { Component, OnInit } from '@angular/core';
import { ChartData } from '../../core/model/goal-report.model';

@Component({
  selector: 'app-service-line-alignment',
  templateUrl: './service-line-alignment.component.html',
  styleUrls: ['./service-line-alignment.component.css']
})
export class ServiceLineAlignmentComponent implements OnInit {
  serviceLineAlignment: ChartData[];
  constructor() { }

  ngOnInit() {
  }

}
