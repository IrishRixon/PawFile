import { TestBed } from '@angular/core/testing';

import { PetProfileDetailsService } from './pet-profile-details.service';

describe('PetProfileDetailsService', () => {
  let service: PetProfileDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetProfileDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
