import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodCardComponent } from '../good-card/good-card.component';
import { Good } from '../../models/good';
import { GoodsService } from '../../services/goods.service';
import { ShelfComponent } from '../shelf/shelf.component';
import { FridgeItem } from '../../models/fridge-item';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { FridgeItemService } from '../../services/fridge-item.service';

@Component({
  standalone: true,
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.css'],
  imports: [CommonModule, ShelfComponent, GoodCardComponent]
})
export class RefrigeratorComponent implements OnInit {
  goods: Good[] = [];
  fridgeItems: FridgeItem[] = [];
  categories: Category[] = [];
  showCategoryList: boolean = false;
  isLoading: boolean = false;
  error: boolean = false;

  constructor(private goodsService: GoodsService, private categoryService: CategoryService, private fridgeItemService: FridgeItemService) {}

  ngOnInit(): void {
    this.loadGoods();
  }

  loadGoods(): void {
    this.goodsService.getGoods().subscribe({
      next: (data) => {
        this.goods = data;
        console.log('Goods loaded:', data);
      },
      error: (err) => {
        console.error('Error fetching goods:', err);
      }
    });
  }

  loadFridgeItems() {
    this.isLoading = true;
    this.fridgeItemService.getFridgeItems().subscribe(
      (items: FridgeItem[]) => {
        this.fridgeItems = items;
        this.isLoading = false;
      },
      () => {
        this.error = true;
        this.isLoading = false;
      }
    );
  }

  showCategories() {
    this.isLoading = true;
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
        this.showCategoryList = true;
        this.isLoading = false;
      },
      () => {
        this.error = true;
        this.isLoading = false;
      }
    );
  }

  getGoodsByCategory(categoryId: number) {
    this.isLoading = true;
    this.goodsService.getGoodsByCategory(categoryId).subscribe(
      (items: FridgeItem[]) => {
        this.fridgeItems = items;
        this.showCategoryList = false;
        this.isLoading = false;
      },
      () => {
        this.error = true;
        this.isLoading = false;
      }
    );
  }
}

