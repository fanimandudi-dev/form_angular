import { TestBed } from '@angular/core/testing';

import { ServicesTaches } from './services-taches';

describe('ServicesTaches', () => {
  let service: ServicesTaches;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesTaches);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
