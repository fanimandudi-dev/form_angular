import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Accueil } from '../pages/accueil/accueil';
import { Stats } from '../pages/stats/stats';
import { ListeNotes } from '../pages/liste-notes/liste-notes';
import { Login } from './login/login';



import { authGuard } from './detail_articles/auth-guard';
import { adminGuardGuard } from './detail_articles/admin-guard-guard';
import { ErrorPage } from './detail_articles/error-page/error-page';
import { NonAuto } from './detail_articles/non-auto/non-auto';


export const routes: Routes = [


  { path: '' ,redirectTo: 'login' ,pathMatch:'full'},
    
    
  { path: 'Articles', 
    canActivate: [authGuard],
    loadComponent: () => import('./detail_articles/articles/articles').then(m => m.Articles)
  },
  { path: '404', component: ErrorPage },
  { path: 'erreur', component: NonAuto },
 

    { path: 'login', component: Login },
  {
    path: 'dashboard',canActivate: [authGuard, adminGuardGuard] ,
    loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
  }
  , {
    path: 'Details_article/:id',
    canActivate: [authGuard],
    loadComponent: () => import('./detail_articles/d-article/d-article').then(m => m.DArticle)

  },
  




  { path: '**', redirectTo: '404', pathMatch: 'full' }

  //  { path: 'intercesseurs', component: IntercesseursComponent },
    //{ path: '', redirectTo: 'login', pathMatch: 'full' }
  

];
