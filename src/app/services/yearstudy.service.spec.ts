import { TestBed } from '@angular/core/testing';

import { YearstudyService } from './yearstudy.service';

describe('YearstudyService', () => {
  let service: YearstudyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearstudyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
