import { Component, OnDestroy } from '@angular/core';
import { CarteFilm } from '../carte-film/carte-film';

@Component({
  selector: 'app-ecran',
  imports: [CarteFilm],
  templateUrl: './ecran.html',
  styleUrl: './ecran.css',
})
export class Ecran  implements OnDestroy {
  temps = 0;
  private intervalle: any;

  constructor() {
    // Démarre un timer
    this.intervalle = setInterval(() => {
      this.temps++;
    }, 1000);
  }

  ngOnDestroy() {
    // IMPORTANT : On nettoie le timer quand le composant disparaît
    // Sinon le timer continuera à tourner en arrière-plan → fuite mémoire !
    clearInterval(this.intervalle);
    console.log('Minuterie détruite, timer nettoyé');
  }
}