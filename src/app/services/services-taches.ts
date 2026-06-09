
export interface Tache {
  id: number;
  titre: string;
  description?: string;
  niveau: 'Haute' | 'Basse' | 'Moyen';
  terminer: boolean;

  


}



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesTaches {

   My_tasks: Tache[]= [
  { id: 1, titre: 'Apprendre Angular', description: 'Étudier les directives', niveau: 'Haute', terminer: false },
  { id: 2, titre: 'Faire les courses', description: 'Acheter des légumes', niveau: 'Basse', terminer: true },
  { id: 3, titre: 'Réunion équipe', description: 'Point hebdomadaire', niveau: 'Moyen', terminer: false },
  { id: 4, titre: 'Répondre aux emails', niveau: 'Moyen', terminer: false },
  { id: 5, titre: 'Sport', description: 'Séance de cardio', niveau: 'Basse', terminer: false },
  { id: 6, titre: 'Fixer bug login', description: 'Problème de token', niveau: 'Haute', terminer: false },
  { id: 7, titre: 'Lecture', description: 'Chapitre 3 du livre', niveau: 'Basse', terminer: true },
  { id: 8, titre: 'Mise à jour projet', niveau: 'Moyen', terminer: false },
  { id: 9, titre: 'Appeler le client', description: 'Suivi de contrat', niveau: 'Haute', terminer: false },
  { id: 10, titre: 'Préparer le dîner', niveau: 'Basse', terminer: true },
  { id: 11, titre: 'Nettoyer le bureau', niveau: 'Basse', terminer: false },
  { id: 12, titre: 'Refactoriser composant', description: 'Optimisation de code', niveau: 'Moyen', terminer: false },
  { id: 13, titre: 'Payer factures', niveau: 'Haute', terminer: true },
  { id: 14, titre: 'Planifier vacances', niveau: 'Basse', terminer: false },
  { id: 15, titre: 'Revue de design', niveau: 'Moyen', terminer: false },
  { id: 16, titre: 'Réparer étagère', niveau: 'Moyen', terminer: false },
  { id: 17, titre: 'Mise à jour dépendances', niveau: 'Haute', terminer: false },
  { id: 18, titre: 'Acheter cadeau', niveau: 'Basse', terminer: true },
  { id: 19, titre: 'Méditation', niveau: 'Basse', terminer: false },
  { id: 20, titre: 'Préparer présentation', niveau: 'Haute', terminer: false },
  { id: 21, titre: 'Sauvegarder base données', niveau: 'Haute', terminer: true },
  { id: 22, titre: 'Arroser les plantes', niveau: 'Basse', terminer: false },
  { id: 23, titre: 'Étudier Tailwind', niveau: 'Moyen', terminer: false },
  { id: 24, titre: 'Organiser fichiers', niveau: 'Basse', terminer: true },
  { id: 25, titre: 'Déployer application', niveau: 'Haute', terminer: false },
  { id: 26, titre: 'Rendez-vous dentiste', niveau: 'Haute', terminer: false },
  { id: 27, titre: 'Écrire documentation', niveau: 'Moyen', terminer: false },
  { id: 28, titre: 'Commander fournitures', niveau: 'Basse', terminer: false },
  { id: 29, titre: 'Test unitaire', niveau: 'Moyen', terminer: false },
  { id: 30, titre: 'Validation design', niveau: 'Moyen', terminer: true },
  { id: 31, titre: 'Appeler parents', niveau: 'Basse', terminer: false },
  { id: 32, titre: 'Réserver restaurant', niveau: 'Basse', terminer: true },
  { id: 33, titre: 'Vérifier logs serveur', niveau: 'Haute', terminer: false },
  { id: 34, titre: 'Mise à jour CV', niveau: 'Moyen', terminer: false },
  { id: 35, titre: 'Apprendre RxJS', description: 'Maîtriser les observables', niveau: 'Haute', terminer: false }
];
      




  get_all_tasks(): Tache[] {
    return this.My_tasks;
  }

  get_task_by_id(id: number): Tache | undefined {
    return this.My_tasks.find(tache => tache.id === id);
  }

  getby_name(name: string): Tache[] {
    return this.My_tasks.filter(tache => tache.titre.toLowerCase().includes(name.toLowerCase()));
  }


  remove_by_id(id: number): void {
    this.My_tasks = this.My_tasks.filter(tache => tache.id !== id);
  }

  add_task(tache: Tache): void {
    this.My_tasks.push(tache);
  }


  
}
