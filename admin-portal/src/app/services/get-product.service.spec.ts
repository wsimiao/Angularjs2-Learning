import { TestBed, inject } from '@angular/core/testing';

import { GetProductService } from './get-product.service';

describe('GetProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetProductService]
    });
  });

  it('should ...', inject([GetProductService], (service: GetProductService) => {
    expect(service).toBeTruthy();
  }));
});
