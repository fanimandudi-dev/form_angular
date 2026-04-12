import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecran } from './ecran';

describe('Ecran', () => {
  let component: Ecran;
  let fixture: ComponentFixture<Ecran>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecran]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ecran);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
