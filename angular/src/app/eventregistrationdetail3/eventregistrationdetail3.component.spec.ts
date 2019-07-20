import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventregistrationdetail3Component } from './eventregistrationdetail3.component';

describe('Eventregistrationdetail3Component', () => {
  let component: Eventregistrationdetail3Component;
  let fixture: ComponentFixture<Eventregistrationdetail3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventregistrationdetail3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventregistrationdetail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
