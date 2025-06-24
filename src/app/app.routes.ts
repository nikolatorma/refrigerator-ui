import { Routes } from '@angular/router';
import { GoodsByCategoryComponent } from './components/goods-by-category/goods-by-category.component';

export const routes: Routes = [
    { path: 'goods/category/:categoryId', component: GoodsByCategoryComponent },
];