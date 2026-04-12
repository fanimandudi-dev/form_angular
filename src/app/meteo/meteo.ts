import { Component, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-meteo',
  imports: [],
  templateUrl: './meteo.html',
  styleUrl: './meteo.css',
})
export class Meteo implements OnChanges,OnInit,OnDestroy{
  userid = input(10);

  ngOnInit(){

console.log("chargement de données");
console.log(this.userid());
  }


  ngOnChanges(changements: SimpleChanges) {
    if (changements['userid']) {
      console.log('Ancien ID utilisateur :', changements['userid'].previousValue);
      console.log('Nouvel ID utilisateur :', changements['userid'].currentValue);
      // On pourrait recharger les données pour le nouvel ID utilisateur
    }
  }

  ngOnDestroy(){


    console.log("composant detruit , netttoyage effectué");
  }





}

 
