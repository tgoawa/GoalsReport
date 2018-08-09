import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedBarChartComponent } from './bar-chart.component';

describe('BarChartComponent', () => {
  let component: GroupedBarChartComponent;
  let fixture: ComponentFixture<GroupedBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
