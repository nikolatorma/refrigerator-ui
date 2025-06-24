import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GoodsService } from '../../services/goods.service';
import { Good } from '../../models/good';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-good-dialog',
  templateUrl: './good-dialog.component.html',
  styleUrls: ['./good-dialog.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class GoodDialogComponent {
  
  @Input() selectedGoodId?: number;

  goodForm: FormGroup;

  constructor(private fb: FormBuilder, private goodsService: GoodsService, private dialogRef: MatDialogRef<GoodDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Good) {
    this.goodForm = this.fb.group({
      name: ['', Validators.required],
      location: [''],
      quantity: [0, [Validators.required, Validators.min(0)]],
      dateStored: [''],
      bestBefore: [''],
      icon: ['']
    });
  }

  ngOnInit(): void {
    this.goodForm.patchValue(this.data);
  }

  onSave(): void {
    const updatedGood = this.goodForm.value;
    if (this.goodForm.valid) {
      const newGood: Good = this.goodForm.value;
      this.goodsService.addGood(newGood).subscribe({
        next: (createdGood) => {
          console.log('Good saved:', createdGood);
        },
        error: (err) => {
          console.error('Error saving good:', err);
        }
      });
    } else {
      console.warn('Form invalid');
    }
    this.goodsService.updateGood(updatedGood).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  onDelete(): void {
    if (this.selectedGoodId) {
      this.goodsService.deleteGood(this.selectedGoodId).subscribe({
        next: () => {
          console.log('Good deleted.');
        },
        error: (err) => {
          console.error('Error deleting good:', err);
        }
      });
    } else {
      console.warn('No good selected to delete.');
    }
  }
}
