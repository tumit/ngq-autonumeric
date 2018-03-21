import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgqAutonumericComponent } from './ngq-autonumeric.component';

describe('NgqAutonumericComponent', () => {
  let component: NgqAutonumericComponent;
  let fixture: ComponentFixture<NgqAutonumericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgqAutonumericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgqAutonumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
