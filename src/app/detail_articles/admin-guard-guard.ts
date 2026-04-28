import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {


  const router = inject(Router);
  const session = localStorage.getItem('user_session');

  if (session) {


    const user = JSON.parse(session);
    if (user.role === 'ADMIN') {
      return true; // C'est un admin, on laisse passer
    }



  }

  // Si ce n'est pas un admin, on le renvoie vers les articles avec un message


  return router.parseUrl('/erreur');


};
