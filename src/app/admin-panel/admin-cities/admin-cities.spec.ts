import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCities } from './admin-cities';

describe('AdminCities', () => {
  let component: AdminCities;
  let fixture: ComponentFixture<AdminCities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
