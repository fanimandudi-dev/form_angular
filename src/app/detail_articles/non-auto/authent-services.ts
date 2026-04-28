import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  nom: string;
  role: string;
  mot_passe: string;
  connecte: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthentServices {
  private readonly STORAGE_KEY = 'liste_utilisateurs';
  private readonly SESSION_KEY = 'user_session';

  // Un signal pour suivre l'utilisateur connecté en temps réel
  currentUser = signal<User | null>(this.getInitialSession());

  // Un signal calculé pour savoir si on est authentifié
  isAuthenticated = computed(() => !!this.currentUser());

  private initialUsers: User[] = [
    { nom: 'Fany', role: 'ADMIN', mot_passe: '1234', connecte: false },
    { nom: 'Gradi', role: 'USER', mot_passe: 'abcd', connecte: false },
    { nom: 'Romain', role: 'USER', mot_passe: '5678', connecte: false }
  ];

  constructor(private router: Router) {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      this.sauvegarderUtilisateurs(this.initialUsers);
    }
  }

  private getInitialSession(): User | null {
    const session = localStorage.getItem(this.SESSION_KEY);
    return session ? JSON.parse(session) : null;
  }

  login(nom: string, mdp: string): boolean {
    const users = this.recupererUtilisateurs();
    const foundUser = users.find(u => u.nom === nom && u.mot_passe === mdp);

    if (foundUser) {
      foundUser.connecte = true;
      this.sauvegarderUtilisateurs(users);

      // Mise à jour du signal et de la session
      this.currentUser.set(foundUser);
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(foundUser));
      return true;
    }
    return false;
  }

  logout() {
    const users = this.recupererUtilisateurs();
    const current = this.currentUser();

    if (current) {
      const index = users.findIndex(u => u.nom === current.nom);
      if (index !== -1) users[index].connecte = false;
      this.sauvegarderUtilisateurs(users);
    }

    this.currentUser.set(null);
    localStorage.removeItem(this.SESSION_KEY);
    this.router.navigate(['/login']);
  }

  private sauvegarderUtilisateurs(users: User[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
  }

  recupererUtilisateurs(): User[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
}