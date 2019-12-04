import { TestBed } from '@angular/core/testing';

import { LibraryLoadersService } from './library-loaders.service';

describe('LibraryLoadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryLoadersService = TestBed.get(LibraryLoadersService);
    expect(service).toBeTruthy();
  });
});
