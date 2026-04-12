import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../mes_services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <h2>Connexion</h2>
      
      <div *ngIf="!auth.isAuthenticated()">
        <input [(ngModel)]="username" placeholder="Username" />
        <input [(ngModel)]="password" type="password" placeholder="Password" />
        <button (click)="login()">Se connecter</button>
      </div>

      <div *ngIf="auth.isAuthenticated()">
        <p>Connecté en tant que : {{ auth.currentUser }}</p>
        <button (click)="logout()">Se déconnecter</button>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      padding: 20px;
      border: 2px solid #333;
      margin: 20px;
    }
    input {
      margin: 5px;
      padding: 8px;
    }
    button {
      margin: 5px;
      padding: 8px 15px;
      cursor: pointer;
    }
  `]
})
export class LoginComponent {
  auth = inject(AuthService);
  username = '';
  password = '';

  login() {
    if (this.auth.login(this.username, this.password)) {
      alert('Connexion réussie !');
      this.username = '';
      this.password = '';
    } else {
      alert('Échec de connexion');
    }
  }

  logout() {
    this.auth.logout();
  }
}