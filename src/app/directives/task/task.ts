



import { Component, inject } from '@angular/core';
import { ServicesTaches, Tache } from '../../services/services-taches';
import ta from '@angular/common/locales/extra/ta';
import { CommonModule } from '@angular/common';






@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {


  tache = inject(ServicesTaches);
  mes_taches: Tache[] = this.tache.get_all_tasks();
 

}
