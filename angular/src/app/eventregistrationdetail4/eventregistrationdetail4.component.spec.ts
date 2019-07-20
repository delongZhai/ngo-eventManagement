import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventregistrationdetail4Component } from './eventregistrationdetail4.component';

describe('Eventregistrationdetail4Component', () => {
  let component: Eventregistrationdetail4Component;
  let fixture: ComponentFixture<Eventregistrationdetail4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventregistrationdetail4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventregistrationdetail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
