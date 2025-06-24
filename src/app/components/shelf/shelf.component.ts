import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodCardComponent } from '../good-card/good-card.component';
import { Good } from '../../models/good';

@Component({
  selector: 'app-shelf',
  standalone: true,
  imports: [CommonModule, GoodCardComponent],
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent {
  @Input() goods: Good[] = [];
}
