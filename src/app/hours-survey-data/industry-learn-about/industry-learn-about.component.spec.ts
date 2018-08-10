import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryLearnAboutComponent } from './industry-learn-about.component';

describe('IndustryLearnAboutComponent', () => {
  let component: IndustryLearnAboutComponent;
  let fixture: ComponentFixture<IndustryLearnAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryLearnAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryLearnAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
