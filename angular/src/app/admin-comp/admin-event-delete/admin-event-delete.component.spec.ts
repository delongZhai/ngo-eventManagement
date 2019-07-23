import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventDeleteComponent } from './admin-event-delete.component';

describe('AdminEventDeleteComponent', () => {
  let component: AdminEventDeleteComponent;
  let fixture: ComponentFixture<AdminEventDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
