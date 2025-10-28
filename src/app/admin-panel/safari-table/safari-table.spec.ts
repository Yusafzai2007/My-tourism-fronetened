import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariTable } from './safari-table';

describe('SafariTable', () => {
  let component: SafariTable;
  let fixture: ComponentFixture<SafariTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafariTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafariTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
