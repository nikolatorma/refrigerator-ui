import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Good } from '../../models/good';

@Component({
  selector: 'app-good-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './good-card.component.html',
  styleUrls: ['./good-card.component.css']
})
export class GoodCardComponent {
  @Input() good!: Good;
}
