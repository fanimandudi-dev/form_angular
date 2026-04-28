import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthentServices } from '../../detail_articles/non-auto/authent-services';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="login-card">
      <h2>{{ auth.isAuthenticated() ? 'Tableau de bord' : 'Connexion' }}</h2>
      
      @if (!auth.isAuthenticated()) {
        <div class="form-group">
          <input [(ngModel)]="username" placeholder="Nom d'utilisateur" />
          <input [(ngModel)]="password" type="password" placeholder="Mot de passe" />
          <button (click)="onLogin()">Entrer</button>
          
          @if (errorMessage()) {
            <p class="error">{{ errorMessage() }}</p>
          }
        </div>
      } @else {
        <div class="welcome-box">
          <p>Bienvenue, <strong>{{ auth.currentUser()?.nom }}</strong></p>
          <span class="badge">{{ auth.currentUser()?.role }}</span>
          <button class="btn-logout" (click)="auth.logout()">Déconnexion</button>
        </div>
      }
    </div>
  `,
  styles: [`
    .login-card { 
      max-width: 350px; margin: 50px auto; padding: 2rem;
      border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      background: white; font-family: sans-serif; text-align: center;
    }
    .form-group input { 
      width: 90%; padding: 12px; margin: 10px 0;
      border: 1px solid #ddd; border-radius: 6px; 
    }
    button { 
      width: 100%; padding: 12px; background: #007bff;
      color: white; border: none; border-radius: 6px; cursor: pointer;
    }
    .error { color: #dc3545; font-size: 0.9rem; margin-top: 10px; }
    .badge { 
      background: #e9ecef; padding: 4px 12px; 
      border-radius: 20px; font-size: 0.8rem; display: inline-block; margin-bottom: 15px;
    }
    .btn-logout { background: #6c757d; margin-top: 10px; }
  `]
})
export class LoginComponent {
  auth = inject(AuthentServices);

  username = '';
  password = '';
  errorMessage = signal(''); // Signal pour gérer les erreurs localement

  onLogin() {
    this.errorMessage.set(''); // Reset erreur

    if (this.auth.login(this.username, this.password)) {
      this.username = '';
      this.password = '';
    } else {
      this.errorMessage.set('Identifiants invalides. Réessayez.');
    }
  }
}