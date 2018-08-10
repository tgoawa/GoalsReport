import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningAdvisoriesComponent } from './learning-advisories.component';

describe('LearningAdvisoriesComponent', () => {
  let component: LearningAdvisoriesComponent;
  let fixture: ComponentFixture<LearningAdvisoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningAdvisoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningAdvisoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
