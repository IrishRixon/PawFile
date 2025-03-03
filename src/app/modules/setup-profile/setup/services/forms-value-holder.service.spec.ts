import { TestBed } from '@angular/core/testing';

import { FormsValueHolderService } from './forms-value-holder.service';

describe('FormsValueHolderService', () => {
  let service: FormsValueHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsValueHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
