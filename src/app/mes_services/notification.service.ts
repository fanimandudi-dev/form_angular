import { Injectable } from '@angular/core';




export interface Task {
  id: number;
  title: string;
  completed: boolean;
}


@Injectable(

)
export class NotificationService {
  
  messages: string[] = [];

  addNotification(message: string): void {
    this.messages.push(message);
    console.log('Notification:', message);
    
    // Auto-suppression après 3 secondes
    setTimeout(() => {
      this.messages.shift();
    }, 3000);
  }

  clearAll(): void {
    this.messages = [];
  }


}
