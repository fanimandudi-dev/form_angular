import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Accueil } from '../pages/accueil/accueil';
import { Stats } from '../pages/stats/stats';
import { ListeNotes } from '../pages/liste-notes/liste-notes';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Articles } from './detail_articles/articles/articles';
import { DArticle } from './detail_articles/d-article/d-article';


export const routes: Routes = [


  { path: '' ,redirectTo: 'Articles' ,pathMatch:'full'},
    
    
  { path: 'Articles', component: Articles },
    { path: 'Details_article/:id', component: DArticle },

    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
  //  { path: 'intercesseurs', component: IntercesseursComponent },
    //{ path: '', redirectTo: 'login', pathMatch: 'full' }
  

];
