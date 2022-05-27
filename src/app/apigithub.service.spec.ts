import { TestBed } from '@angular/core/testing';

import { ApigithubService } from './apigithub.service';

describe('ApigithubService', () => {
  let service: ApigithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApigithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
