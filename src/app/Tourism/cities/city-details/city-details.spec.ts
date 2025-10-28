import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetails } from './city-details';

describe('CityDetails', () => {
  let component: CityDetails;
  let fixture: ComponentFixture<CityDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
