import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDataComponent } from './goal-data.component';

describe('GoalDataComponent', () => {
  let component: GoalDataComponent;
  let fixture: ComponentFixture<GoalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
