import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyServiceComponent } from './specialty-service.component';

describe('SpecialtyServiceComponent', () => {
  let component: SpecialtyServiceComponent;
  let fixture: ComponentFixture<SpecialtyServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
