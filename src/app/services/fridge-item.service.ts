import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FridgeItem } from '../models/fridge-item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FridgeItemService {

  private apiUrl = 'http://localhost:8080/api/fridge-items';

  constructor(private http: HttpClient) {}

  getFridgeItems(): Observable<FridgeItem[]> {
    return this.http.get<FridgeItem[]>(this.apiUrl);
  }
}
