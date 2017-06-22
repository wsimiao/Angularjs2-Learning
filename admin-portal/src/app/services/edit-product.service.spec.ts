import { TestBed, inject } from '@angular/core/testing';

import { EditProductService } from './edit-product.service';

describe('EditProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditProductService]
    });
  });

  it('should ...', inject([EditProductService], (service: EditProductService) => {
    expect(service).toBeTruthy();
  }));
});
