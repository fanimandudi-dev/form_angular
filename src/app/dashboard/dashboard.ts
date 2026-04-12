import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {




  // Données fictives pour l'instant
  stats = [
    { label: 'Total Intercesseurs', value: 124, icon: 'users', color: 'bg-blue-500' },
    { label: 'Présents Aujourd\'hui', value: 98, icon: 'check', color: 'bg-green-500' },
    { label: 'Absences Critiques', value: 5, icon: 'alert', color: 'bg-red-500' },
    { label: 'Taux de Présence', value: '82%', icon: 'chart', color: 'bg-purple-500' }
  ];

  recentActivities = [
    { intercesseur: 'Mondo Stephen', action: 'Présence marquée', heure: '08:15', session: 'Prière Matinale' },
    { intercesseur: 'Kabwe Jean', action: 'Retard signalé', heure: '08:45', session: 'Session Technique' },
    { intercesseur: 'Luzolo Marie', action: 'Absence justifiée', heure: '09:00', session: 'Prière Matinale' }
  ];

}
