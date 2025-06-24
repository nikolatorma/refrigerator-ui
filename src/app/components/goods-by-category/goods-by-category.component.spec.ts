import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsByCategoryComponent } from './goods-by-category.component';

describe('GoodsByCategoryComponent', () => {
  let component: GoodsByCategoryComponent;
  let fixture: ComponentFixture<GoodsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsByCategoryComponent]
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
