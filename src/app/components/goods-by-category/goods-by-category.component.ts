import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoodsService } from '../../services/goods.service';
import { Good } from '../../models/good';
import { MatDialog } from '@angular/material/dialog';
import { GoodDialogComponent } from '../good-dialog/good-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-goods-by-category',
  templateUrl: './goods-by-category.component.html',
  styleUrls: ['./goods-by-category.component.css'],
  imports: [CommonModule]
})
export class GoodsByCategoryComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private goodsService = inject(GoodsService);
  private dialog = inject(MatDialog);


  categoryId!: number;
  goods: Good[] = [];
  isLoading = false;
  error: string | null = null;

  ngOnInit(): void {
    this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId'));
    this.fetchGoods();
  }

  fetchGoods(): void {
    this.isLoading = true;
    this.goodsService.getGoodsByCategory(this.categoryId).subscribe({
      next: (data) => {
        this.goods = data;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load goods';
        this.isLoading = false;
      }
    });
  }
  openGoodDialog(good: Good): void {
    const dialogRef = this.dialog.open(GoodDialogComponent, {
      width: '400px',
      data: good
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchGoods();
      }
    });
  }
}
