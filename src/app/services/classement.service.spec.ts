import { TestBed, inject } from '@angular/core/testing';

import { ClassementService } from './classement.service';

describe('ClassementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassementService]
    });
  });

  it('should be created', inject([ClassementService], (service: ClassementService) => {
    expect(service).toBeTruthy();
  }));
});
