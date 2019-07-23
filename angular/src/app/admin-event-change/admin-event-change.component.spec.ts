import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventChangeComponent } from './admin-event-change.component';

describe('AdminEventChangeComponent', () => {
  let component: AdminEventChangeComponent;
  let fixture: ComponentFixture<AdminEventChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
