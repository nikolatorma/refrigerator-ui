import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/api/categories';

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
