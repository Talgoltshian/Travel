import { TestBed } from '@angular/core/testing';

import { FeedListApiService } from './feed-list-api.service';

describe('FeedListApiService', () => {
  let service: FeedListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
