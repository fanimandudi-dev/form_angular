import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../mes_services/task.service';
import { NotificationService } from '../../mes_services/notification.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [NotificationService],  // ✅ Instance locale DIFFÉRENTE
  template: `
    <div class="task-form-container">
      <h2>Ajouter une Tâche</h2>

      <!-- Notifications locales (différentes de TaskList) -->
      <div class="notifications">
        <div *ngFor="let msg of notif.messages" class="notification">
          {{ msg }}
        </div>
      </div>

      <input 
        [(ngModel)]="newTaskTitle" 
        placeholder="Nouvelle tâche"
        (keyup.enter)="addTask()"
      />
      <button (click)="addTask()">Ajouter</button>
    </div>
  `,
  styles: [`
    .task-form-container {
      padding: 20px;
      border: 2px solid blue;
      margin: 20px;
    }
    .notification {
      background: lightblue;
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
    }
    input {
      padding: 8px;
      width: 300px;
    }
    button {
      padding: 8px 15px;
      margin-left: 10px;
      cursor: pointer;
    }
  `]
})
export class TaskForm {
  taskService = inject(TaskService);
  notif = inject(NotificationService);
  newTaskTitle = '';

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle);
      this.notif.addNotification(`Tâche "${this.newTaskTitle}" ajoutée !`);
      this.newTaskTitle = '';
    }
  }
}
