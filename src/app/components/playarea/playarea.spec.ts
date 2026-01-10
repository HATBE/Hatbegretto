import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playarea } from './playarea';

describe('Playarea', () => {
  let component: Playarea;
  let fixture: ComponentFixture<Playarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Playarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
