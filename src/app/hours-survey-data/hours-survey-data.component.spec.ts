import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursSurveyDataComponent } from './hours-survey-data.component';

describe('HoursSurveyDataComponent', () => {
  let component: HoursSurveyDataComponent;
  let fixture: ComponentFixture<HoursSurveyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursSurveyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursSurveyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
