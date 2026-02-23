import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStudent } from './card-student';

describe('CardStudent', () => {
  let component: CardStudent;
  let fixture: ComponentFixture<CardStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
