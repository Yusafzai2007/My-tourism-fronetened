import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComAdmin } from './all-com-admin';

describe('AllComAdmin', () => {
  let component: AllComAdmin;
  let fixture: ComponentFixture<AllComAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllComAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllComAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
