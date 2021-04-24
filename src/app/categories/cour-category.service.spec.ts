import { TestBed } from '@angular/core/testing';

import { CourCategoryService } from './cour-category.service';

describe('CourCategoryService', () => {
  let service: CourCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
