import { TestBed } from '@angular/core/testing';

import { FlowersService } from './flowers.service';

describe('FlowersService', () => {
  let service: FlowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
