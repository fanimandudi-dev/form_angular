import { Component,inject,input} from '@angular/core';
import { TasksServices } from '../services/tasks-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carte-film',
  imports: [CommonModule],
  templateUrl: './carte-film.html',
  styleUrl: './carte-film.css',
})
export class CarteFilm  {



  task_service=inject(TasksServices);
  taches:string[]=[];


  ajouter() {
    this.task_service.ajout_taches('tache 1');
    this.taches = this.task_service.get_tache();
  }
  
}