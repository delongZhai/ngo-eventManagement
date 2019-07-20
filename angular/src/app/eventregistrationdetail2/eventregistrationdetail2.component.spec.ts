import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventregistrationdetail2Component } from './eventregistrationdetail2.component';

describe('Eventregistrationdetail2Component', () => {
  let component: Eventregistrationdetail2Component;
  let fixture: ComponentFixture<Eventregistrationdetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventregistrationdetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventregistrationdetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
