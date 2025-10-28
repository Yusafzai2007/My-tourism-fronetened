import { TestBed } from '@angular/core/testing';

import { Tourism } from './tourism';

describe('Tourism', () => {
  let service: Tourism;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tourism);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
