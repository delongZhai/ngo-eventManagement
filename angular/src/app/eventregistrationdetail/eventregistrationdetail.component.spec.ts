import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventregistrationdetailComponent } from './eventregistrationdetail.component';

describe('EventregistrationdetailComponent', () => {
  let component: EventregistrationdetailComponent;
  let fixture: ComponentFixture<EventregistrationdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventregistrationdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventregistrationdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
