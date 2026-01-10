import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBack } from './card-back';

describe('CardBack', () => {
  let component: CardBack;
  let fixture: ComponentFixture<CardBack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
