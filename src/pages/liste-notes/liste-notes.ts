import { Component, computed, signal } from '@angular/core';
import { CardStudent } from "../../components/card-student/card-student";
import { Etudiant } from '../../Models/etudiant-model';
import e from 'express';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-notes',
  imports: [CardStudent, FormsModule,CommonModule
  ],
  templateUrl: './liste-notes.html',
  styleUrl: './liste-notes.css',
})
export class ListeNotes {

  etudiant = signal<Etudiant[]>([
    { id: 1, nom: 'Dupont', prenom: 'Alice', classe: '6ème', notes: [12, 15, 14] },
    { id: 2, nom: 'Martin', prenom: 'Bob', classe: '3ème', notes: [10, 8, 2] },
    { id: 3, nom: 'Bernard', prenom: 'Charlie', classe: '6ème', notes: [18, 17, 19] },
    { id: 4, nom: 'Thomas', prenom: 'David', classe: '3ème', notes: [11, 1, 10] },
    { id: 5, nom: 'Petit', prenom: 'Eve', classe: '5ème', notes: [14, 0, 15] }
  ]);
  filtre = signal<string>('Tous');
  liste_etudiant = computed(() =>{
    const listeComplete = this.etudiant(); // On lit la valeur du signal

    if (this.filtre() === 'Tous') {
      
      return listeComplete; // Cas 1 : On retourne tout
    }
// Cas 2 : On retourne la liste filtrée (C'est ce qui manquait !)
    console.table(listeComplete.filter(e => e.classe === this.filtre()));
    console.log(this.filtre());
    
    
    return listeComplete.filter(e => e.classe === this.filtre());

  }
  
  
  
  )

  Moyenne(notes: number[]):number {
    
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return  +(sum / notes.length).toFixed(2);
  
}



  supprimer(id: number) {
  this.etudiant.update(liste=>liste.filter(e=>(e.id !== id)))

  }


  badge_color(moyenne: number): string {
    if (moyenne >= 10 && moyenne < 14) {
      return "bg-orange-300 text-orange-500 border-orange-500";
    } else if (moyenne >= 14) {
      return "bg-green-300 text-green-400 border-green-500";
  
    } else {
      return 'bg-red-200 text-red-400 border-red-500';
    }
  }

  card_color(moyenne: number): string {
    if (moyenne >= 10 && moyenne < 14) {
      return "bg-orange-100 border-orange-300";
    } else if (moyenne >= 14) {
      return "bg-green-100 border-green-300";
    }
    else { return "bg-red-100 border-red-300"; }
  }


  getStatut(notes: number[]): string {
    const m = this.Moyenne(notes);
    if (m < 10) return 'Échec';
    if (m >= 12 && m < 14) return 'Passable';
    return 'Réussite';
  }
  
  // getEtudiant_filtre() {
  //   return this.liste_etudiant();
  // }

}
