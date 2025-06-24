import { TestBed } from '@angular/core/testing';

import { FridgeItemService } from './fridge-item.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FridgeItemService', () => {
  let service: FridgeItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FridgeItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
