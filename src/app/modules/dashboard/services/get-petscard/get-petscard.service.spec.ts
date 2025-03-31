import { TestBed } from '@angular/core/testing';

import { GetPetscardService } from './get-petscard.service';

describe('GetPetscardService', () => {
  let service: GetPetscardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPetscardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
