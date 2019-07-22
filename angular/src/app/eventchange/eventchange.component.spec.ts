import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventchangeComponent } from './eventchange.component';

describe('EventchangeComponent', () => {
  let component: EventchangeComponent;
  let fixture: ComponentFixture<EventchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
