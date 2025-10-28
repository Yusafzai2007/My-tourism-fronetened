import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingImages } from './sliding-images';

describe('SlidingImages', () => {
  let component: SlidingImages;
  let fixture: ComponentFixture<SlidingImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingImages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
