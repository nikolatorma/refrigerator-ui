import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Good } from '../models/good';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  private apiUrl = 'http://localhost:8080/api/goods';

  constructor(private http: HttpClient) {}

  getGoods(): Observable<Good[]> {
    return this.http.get<Good[]>(this.apiUrl);
  }

  getGood(id: number): Observable<Good> {
    return this.http.get<Good>(`${this.apiUrl}/${id}`);
  }

  addGood(good: Good): Observable<Good> {
    return this.http.post<Good>(this.apiUrl, good);
  }

  updateGood(good: Good): Observable<Good> {
    return this.http.put<Good>(`${this.apiUrl}/${good.id}`, good);
  }

  deleteGood(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getGoodsByCategory(categoryId: number): Observable<Good[]> {
    return this.http.get<Good[]>(`${this.apiUrl}/category/${categoryId}`);
  }
}

