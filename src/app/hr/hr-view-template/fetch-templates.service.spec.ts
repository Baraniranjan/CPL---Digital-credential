import { TestBed } from '@angular/core/testing';

import { FetchTemplatesService } from './fetch-templates.service';

describe('FetchTemplatesService', () => {
  let service: FetchTemplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchTemplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
