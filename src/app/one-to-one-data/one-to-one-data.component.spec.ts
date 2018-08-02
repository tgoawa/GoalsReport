import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneToOneDataComponent } from './one-to-one-data.component';

describe('OneToOneDataComponent', () => {
  let component: OneToOneDataComponent;
  let fixture: ComponentFixture<OneToOneDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneToOneDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneToOneDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
