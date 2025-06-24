import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDialogComponent } from './good-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('GoodDialogComponent', () => {
  let component: GoodDialogComponent;
  let fixture: ComponentFixture<GoodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodDialogComponent, HttpClientTestingModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
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
