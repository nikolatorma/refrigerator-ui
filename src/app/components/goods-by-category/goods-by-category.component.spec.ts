import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsByCategoryComponent } from './goods-by-category.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('GoodsByCategoryComponent', () => {
  let component: GoodsByCategoryComponent;
  let fixture: ComponentFixture<GoodsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsByCategoryComponent, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
