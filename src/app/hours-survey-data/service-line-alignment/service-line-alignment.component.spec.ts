import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLineAlignmentComponent } from './service-line-alignment.component';

describe('ServiceLineAlignmentComponent', () => {
  let component: ServiceLineAlignmentComponent;
  let fixture: ComponentFixture<ServiceLineAlignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLineAlignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLineAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
