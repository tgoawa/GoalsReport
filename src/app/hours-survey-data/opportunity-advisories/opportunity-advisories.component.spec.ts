import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityAdvisoriesComponent } from './opportunity-advisories.component';

describe('OpportunityAdvisoriesComponent', () => {
  let component: OpportunityAdvisoriesComponent;
  let fixture: ComponentFixture<OpportunityAdvisoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityAdvisoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityAdvisoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
