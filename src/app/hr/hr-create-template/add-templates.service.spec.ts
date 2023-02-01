import { TestBed } from '@angular/core/testing';

import { AddTemplatesService } from './add-templates.service';

describe('AddTemplatesService', () => {
  let service: AddTemplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTemplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
