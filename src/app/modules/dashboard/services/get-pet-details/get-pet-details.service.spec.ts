import { TestBed } from '@angular/core/testing';

import { GetPetDetailsService } from './get-pet-details.service';

describe('GetPetDetailsService', () => {
  let service: GetPetDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPetDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
