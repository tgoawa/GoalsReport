import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoGoalsComponent } from './no-goals.component';

describe('NoGoalsComponent', () => {
  let component: NoGoalsComponent;
  let fixture: ComponentFixture<NoGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
