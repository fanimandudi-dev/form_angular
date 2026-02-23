import { Component, signal, computed, Pipe } from '@angular/core';
import { CardStat } from '../../components/card-stat/card-stat';
import { Etudiant } from '../../Models/etudiant-model';
import { CommonModule } from '@angular/common'; // Important pour ngClass et le pipe number

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CardStat, CommonModule],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  // Tâche 7.1 : Créer le signal source
  etudiantsSignal = signal<Etudiant[]>([
    { id: 1, nom: 'Dupont', prenom: 'Alice', classe: '6ème', notes: [12, 15, 14] },
    { id: 2, nom: 'Martin', prenom: 'Bob', classe: '3ème', notes: [10, 8, 2] },
    { id: 3, nom: 'Bernard', prenom: 'Charlie', classe: '6ème', notes: [18, 17, 19] },
    { id: 4, nom: 'Thomas', prenom: 'David', classe: '3ème', notes: [11, 1, 10] },
    { id: 5, nom: 'Petit', prenom: 'Eve', classe: '5ème', notes: [14, 0, 15] }
  ]);

  // Étape intermédiaire : Calculer la moyenne individuelle de chaque étudiant
  private etudiantsAvecMoyennes = computed(() => {
    return this.etudiantsSignal().map(e => {
      const somme = e.notes.reduce((acc, note) => acc + note, 0);
      const moyenne = e.notes.length > 0 ? somme / e.notes.length : 0;
      return { ...e, moyenneCalculee: moyenne };
    });
  });

  // Tâche 7.1 : Moyenne de toutes les moyennes
  moyenneGenerale = computed(() => {
    const liste = this.etudiantsAvecMoyennes();
    if (liste.length === 0) return 0;
    const totalMoyennes = liste.reduce((acc, e) => acc + e.moyenneCalculee, 0);
    return +(totalMoyennes / liste.length).toFixed(2);
  });

  // Tâche 7.1 : Nombre d'étudiants avec moyenne >= 10
  nombreReussites = computed(() =>
    this.etudiantsAvecMoyennes().filter(e => e.moyenneCalculee >= 10).length
  );

  // Tâche 7.1 : Nombre d'étudiants avec moyenne < 10
  nombreEchecs = computed(() =>
    this.etudiantsAvecMoyennes().filter(e => e.moyenneCalculee < 10).length
  );
}