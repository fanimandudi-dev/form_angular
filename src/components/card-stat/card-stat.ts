import { CommonModule } from '@angular/common';
import { Component, Input, Pipe } from '@angular/core';

@Component({
  selector: 'app-card-stat',
  imports: [],
  templateUrl: './card-stat.html',
  styleUrl: './card-stat.css',
})
export class CardStat {
  @Input() titre_carte: string = '';
  @Input() valeur!: number;

}
