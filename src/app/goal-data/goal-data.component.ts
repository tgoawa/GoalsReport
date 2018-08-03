import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-data',
  templateUrl: './goal-data.component.html',
  styleUrls: ['./goal-data.component.css']
})
export class GoalDataComponent implements OnInit {

  date;

  constructor() { }

  ngOnInit() {
    this.date = new Date();
  }

}
