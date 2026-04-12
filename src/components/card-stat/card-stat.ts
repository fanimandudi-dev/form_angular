import { CommonModule } from '@angular/common';
import { Component, inject, Input, Pipe } from '@angular/core';
import { Produit, ServicesProduits } from '../../app/services/services-produits';

@Component({
  selector: 'app-card-stat',
  imports: [CommonModule],
  templateUrl: './card-stat.html',
  styleUrl: './card-stat.css',
})

export class CardStat {



  produit_services = inject(ServicesProduits);
  produits: Produit[] = [];
  

  constructor() {
   this.produits = this.produit_services.getAllProduits();
  } 

  


  @Input() titre_carte: string = '';
  @Input() valeur!: number;

  @Input() color: string = 'blue';

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
    };
 


  }

}
