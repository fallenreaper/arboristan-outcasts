import { TestBed } from '@angular/core/testing';

import { EvepraisalService } from './evepraisal.service';

describe('EvepraisalService', () => {
  let service: EvepraisalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvepraisalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
