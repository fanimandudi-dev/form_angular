import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {



  private authenticated = false;
  currentUser: string | null = null;

  login(username: string, password: string): boolean {
    // Simulation simple
    if (username && password) {
      this.authenticated = true;
      this.currentUser = username;
      return true;
    }
    return false;
  }

  logout() {
    this.authenticated = false;
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
  
}
