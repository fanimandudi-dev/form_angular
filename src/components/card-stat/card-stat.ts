import { CommonModule } from '@angular/common';
import { Component, Input, Pipe } from '@angular/core';

@Component({
  selector: 'app-card-stat',
  imports: [CommonModule],
  templateUrl: './card-stat.html',
  styleUrl: './card-stat.css',
})
export class CardStat {
  @Input() titre_carte: string = '';
  @Input() valeur!: number;

  @Input() color: string = 'blue'

  getthemes() {
    return {
      'bg-red-200 border-red-500': this.color === 'red',
      'bg-green-200 border-green-500': this.color === 'green',
      'bg-blue-200 border-blue-500': this.color === 'blue',

    };
  }

  gettext() {
    return {
      'text-red-500': this.color === 'red',
      'text-green-500': this.color === 'green',
      'text-blue-500': this.color === 'blue',
    }
 


  }
}
