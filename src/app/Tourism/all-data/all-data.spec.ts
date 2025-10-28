import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllData } from './all-data';

describe('AllData', () => {
  let component: AllData;
  let fixture: ComponentFixture<AllData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
