import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeratorComponent } from './refrigerator.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RefrigeratorComponent', () => {
  let component: RefrigeratorComponent;
  let fixture: ComponentFixture<RefrigeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefrigeratorComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefrigeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
