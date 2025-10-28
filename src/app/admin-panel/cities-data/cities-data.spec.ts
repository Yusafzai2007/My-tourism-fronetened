import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesData } from './cities-data';

describe('CitiesData', () => {
  let component: CitiesData;
  let fixture: ComponentFixture<CitiesData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitiesData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
