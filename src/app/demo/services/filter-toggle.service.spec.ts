import { TestBed } from '@angular/core/testing';

import { FilterToggleService } from './filter-toggle.service';

describe('FilterToggleService', () => {
  let service: FilterToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
