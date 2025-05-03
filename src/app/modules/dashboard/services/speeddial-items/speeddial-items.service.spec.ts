import { TestBed } from '@angular/core/testing';

import { SpeeddialItemsService } from './speeddial-items.service';

describe('SpeeddialItemsService', () => {
  let service: SpeeddialItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeeddialItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
