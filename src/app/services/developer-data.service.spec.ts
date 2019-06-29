import { TestBed } from '@angular/core/testing';

import { DeveloperDataService } from './developer-data.service';

describe('DeveloperDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeveloperDataService = TestBed.get(DeveloperDataService);
    expect(service).toBeTruthy();
  });
});
