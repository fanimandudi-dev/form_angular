import { TestBed } from '@angular/core/testing';

import { ServicesProduits } from './services-produits';

describe('ServicesProduits', () => {
  let service: ServicesProduits;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesProduits);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
