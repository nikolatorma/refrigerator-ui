import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDialogComponent } from './good-dialog.component';

describe('GoodDialogComponent', () => {
  let component: GoodDialogComponent;
  let fixture: ComponentFixture<GoodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
