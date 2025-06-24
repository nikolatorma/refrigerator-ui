import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodCardComponent } from './good-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GoodCardComponent', () => {
  let component: GoodCardComponent;
  let fixture: ComponentFixture<GoodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodCardComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodCardComponent);
    component = fixture.componentInstance;
    component.good = { id: 1, name: 'Test Good', icon: 'icon', location: 'FRIDGE', category: '1', quantity: 1, storedDate: '02.02.2025', bestBeforeDate: '09.09.2025' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});