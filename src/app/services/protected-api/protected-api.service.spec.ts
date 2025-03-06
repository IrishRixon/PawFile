import { TestBed } from '@angular/core/testing';

import { ProtectedApiService } from './protected-api.service';

describe('ProtectedApiService', () => {
  let service: ProtectedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtectedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
