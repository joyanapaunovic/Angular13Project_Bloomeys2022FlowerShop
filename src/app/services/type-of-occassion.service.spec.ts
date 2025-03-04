import { TestBed } from '@angular/core/testing';

import { TypeOfOccassionService } from './type-of-occassion.service';

describe('TypeOfOccassionService', () => {
  let service: TypeOfOccassionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfOccassionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
