import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCities } from './add-cities';

describe('AddCities', () => {
  let component: AddCities;
  let fixture: ComponentFixture<AddCities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
