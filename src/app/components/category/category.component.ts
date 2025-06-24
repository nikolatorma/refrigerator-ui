import { Component, OnInit, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  private categoryService = inject(CategoryService);
  private router = inject(Router);


  categories: Category[] = [];
  isLoading = false;
  error: string | null = null;

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.isLoading = true;
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load categories';
        this.isLoading = false;
      }
    });
  }

  goToGoods(categoryId: number): void {
    this.router.navigate(['/goods/category', categoryId]);
  }
}

