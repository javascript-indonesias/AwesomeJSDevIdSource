import { TestBed } from '@angular/core/testing';

import { LogUpdateService } from './log-update.service';

describe('LogUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogUpdateService = TestBed.get(LogUpdateService);
    expect(service).toBeTruthy();
  });
});
