import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slidingimaes } from './slidingimaes';

describe('Slidingimaes', () => {
  let component: Slidingimaes;
  let fixture: ComponentFixture<Slidingimaes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slidingimaes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slidingimaes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
