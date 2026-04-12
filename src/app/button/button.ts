import { Component, inject } from '@angular/core';
import { Count } from '../services/count';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  count = inject(Count);
  increment() {
    this.count.increment();
  }

  reset() {
    this.count.null();
  }
}
