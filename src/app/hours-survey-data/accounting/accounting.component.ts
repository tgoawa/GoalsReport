import { Component, OnInit } from '@angular/core';
import { ChartData } from '../../core/model/goal-report.model';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {
  accountingChart: ChartData[];
  constructor() { }

  ngOnInit() {
  }

}
