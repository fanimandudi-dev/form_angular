import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DArticle } from './d-article';

describe('DArticle', () => {
  let component: DArticle;
  let fixture: ComponentFixture<DArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
