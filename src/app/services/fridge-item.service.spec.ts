import { TestBed } from '@angular/core/testing';

import { FridgeItemService } from './fridge-item.service';

describe('FridgeItemService', () => {
  let service: FridgeItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FridgeItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
