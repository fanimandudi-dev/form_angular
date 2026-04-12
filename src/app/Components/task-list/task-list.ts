import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../mes_services/task.service';
import { NotificationService } from '../../mes_services/notification.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService],  // ✅ Instance locale
  template: `
    <div class="task-list-container">
      <h2>Liste des Tâches</h2>

      <!-- Notifications locales -->
      <div class="notifications">
        <div *ngFor="let msg of notif.messages" class="notification">
          {{ msg }}
        </div>
      </div>

      <ul>
        <li *ngFor="let task of getTasks()">
          <input 
            type="checkbox" 
            [checked]="task.completed"
            (change)="toggleTask(task.id)"
          />
          <span [class.completed]="task.completed">
            {{ task.title }}
          </span>
          <button (click)="deleteTask(task.id)">Supprimer</button>
        </li>
      </ul>

      <p *ngIf="getTasks().length === 0">Aucune tâche</p>
    </div>
  `,
  styles: [`
    .task-list-container {
      padding: 20px;
      border: 2px solid green;
      margin: 20px;
    }
    .completed {
      text-decoration: line-through;
      color: gray;
    }
    .notification {
      background: lightgreen;
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
    }
    li {
      list-style: none;
      padding: 5px;
    }
    button {
      margin-left: 10px;
      cursor: pointer;
    }
  `]
})
export class TaskList {
  taskService = inject(TaskService);
  notif = inject(NotificationService);

  getTasks() {
    return this.taskService.getTasks();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.notif.addNotification('Tâche supprimée !');
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
    this.notif.addNotification('Tâche modifiée !');
  }
}
  

