import { TestBed } from '@angular/core/testing';
import { GoodsService } from './goods.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GoodsService', () => {
  let service: GoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GoodsService]
    });
    service = TestBed.inject(GoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
