import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksServices {


  mes_taches:string []=[];


  ajout_taches(tache:string){

this.mes_taches.push(tache);
    console.log('tache ajoute', tache);

  }




  get_tache():string[]{


    return [...this.mes_taches];
  }
  
}
