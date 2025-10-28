import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAgency } from './travel-agency';

describe('TravelAgency', () => {
  let component: TravelAgency;
  let fixture: ComponentFixture<TravelAgency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelAgency]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelAgency);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
