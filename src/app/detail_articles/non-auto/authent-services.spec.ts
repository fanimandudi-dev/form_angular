import { TestBed } from '@angular/core/testing';

import { AuthentServices } from './authent-services';

describe('AuthentServices', () => {
  let service: AuthentServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
