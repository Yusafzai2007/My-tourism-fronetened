import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingImagesText } from './sliding-images-text';

describe('SlidingImagesText', () => {
  let component: SlidingImagesText;
  let fixture: ComponentFixture<SlidingImagesText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingImagesText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingImagesText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
