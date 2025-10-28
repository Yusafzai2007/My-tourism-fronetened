import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdcts } from './add-prodcts';

describe('AddProdcts', () => {
  let component: AddProdcts;
  let fixture: ComponentFixture<AddProdcts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProdcts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProdcts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
