import { TestBed } from '@angular/core/testing';

import { TravelCreatorApiService } from './travel-creator-api.service';

describe('TravelCreatorApiService', () => {
  let service: TravelCreatorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelCreatorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
