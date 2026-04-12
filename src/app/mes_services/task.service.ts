import { Injectable } from '@angular/core';




export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {



  
  
   private tasks: Task[] = [];
    private nextId = 1;
  
    getTasks(): Task[] {
      return [...this.tasks];
    }
  
    addTask(title: string): Task {
      const task: Task = {
        id: this.nextId++,
        title,
        completed: false
      };
      this.tasks.push(task);
      return task;
    }
  
    deleteTask(id: number): void {
      this.tasks = this.tasks.filter(t => t.id !== id);
    }
  
    toggleTask(id: number): void {
      const task = this.tasks.find(t => t.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    }
  
  
  
  
  
  
  
  
}
