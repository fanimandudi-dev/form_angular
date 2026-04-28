import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {



  const router = inject(Router);

  // On récupère la session dans le localStorage
  const session = localStorage.getItem('user_session');

  if (session) {
    const user = JSON.parse(session);
    if (user.connecte) {
      return true; // Accès autorisé
    }
  }

  // Sinon, redirection vers la page de login
  return router.parseUrl('/login');


  
};
