import { CommonModule } from '@angular/common';
import { inject, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthentServices } from '../detail_articles/non-auto/authent-services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  private router = inject(Router);
  private auth = inject(AuthentServices);
  private fb = inject(FormBuilder); // Utilisation d'inject pour plus de consistance

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  onLogin() {

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      if (this.auth.login(username, password)) {
        // 1. Récupérer l'utilisateur qui vient de se connecter
        // On suppose que votre service met à jour un signal ou retourne l'objet
        const users = this.auth.recupererUtilisateurs();
        const connectedUser = users.find(u => u.nom === username);

        // 2. Logique de redirection selon le rôle
        if (connectedUser?.role === 'ADMIN') {
          console.log('Direction : Dashboard Admin');
          this.router.navigate(['/dashboard']);
        } else {
          console.log('Direction : Catalogue Articles');
          this.router.navigate(['/Articles']);
        }

      } else {
        alert('Identifiants invalides.');
      }
    }
  }





}