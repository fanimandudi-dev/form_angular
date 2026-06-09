import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardApi } from './card-api';

describe('CardApi', () => {
  let component: CardApi;
  let fixture: ComponentFixture<CardApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
