import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFront } from './card-front';

describe('CardFront', () => {
  let component: CardFront;
  let fixture: ComponentFixture<CardFront>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFront]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFront);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
