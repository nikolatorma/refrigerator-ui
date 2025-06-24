import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FridgeItem } from '../models/fridge-item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FridgeItemService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/api/fridge-items';

  getFridgeItems(): Observable<FridgeItem[]> {
    return this.http.get<FridgeItem[]>(this.apiUrl);
  }
}
