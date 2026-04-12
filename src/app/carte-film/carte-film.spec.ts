import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteFilm } from './carte-film';

describe('CarteFilm', () => {
  let component: CarteFilm;
  let fixture: ComponentFixture<CarteFilm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteFilm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteFilm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
