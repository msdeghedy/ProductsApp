import { TestBed } from '@angular/core/testing';

import { ConfirmExitService } from './confirm-exit.service';

describe('ConfirmExitService', () => {
  let service: ConfirmExitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmExitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
