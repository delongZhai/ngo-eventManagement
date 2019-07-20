import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventregisterconfirmationComponent } from './eventregisterconfirmation.component';

describe('EventregisterconfirmationComponent', () => {
  let component: EventregisterconfirmationComponent;
  let fixture: ComponentFixture<EventregisterconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventregisterconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventregisterconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
