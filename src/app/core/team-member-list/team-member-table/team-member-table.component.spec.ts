import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberTableComponent } from './team-member-table.component';

describe('TeamMemberTableComponent', () => {
  let component: TeamMemberTableComponent;
  let fixture: ComponentFixture<TeamMemberTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
