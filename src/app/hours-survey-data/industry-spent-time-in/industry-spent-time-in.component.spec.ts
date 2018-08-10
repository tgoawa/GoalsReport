import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrySpentTimeInComponent } from './industry-spent-time-in.component';

describe('IndustrySpentTimeInComponent', () => {
  let component: IndustrySpentTimeInComponent;
  let fixture: ComponentFixture<IndustrySpentTimeInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrySpentTimeInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrySpentTimeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
