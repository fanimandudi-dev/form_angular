import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAuto } from './non-auto';

describe('NonAuto', () => {
  let component: NonAuto;
  let fixture: ComponentFixture<NonAuto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonAuto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonAuto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
