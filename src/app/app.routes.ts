import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Accueil } from '../pages/accueil/accueil';
import { Stats } from '../pages/stats/stats';
import { ListeNotes } from '../pages/liste-notes/liste-notes';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';


export const routes: Routes = [


    { path: '', component:Login },

    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
  //  { path: 'intercesseurs', component: IntercesseursComponent },
    //{ path: '', redirectTo: 'login', pathMatch: 'full' }
  

];
