import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCom } from './all-com';

describe('AllCom', () => {
  let component: AllCom;
  let fixture: ComponentFixture<AllCom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
