import { TestBed } from '@angular/core/testing';

import { UpdateDetailsFormsService } from './update-details-forms.service';

describe('UpdateDetailsFormsService', () => {
  let service: UpdateDetailsFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateDetailsFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
