import { TestBed } from '@angular/core/testing';

import { EventsserService } from './eventsser.service';

describe('EventsserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsserService = TestBed.get(EventsserService);
    expect(service).toBeTruthy();
  });
});
