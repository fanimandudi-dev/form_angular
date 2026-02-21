import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Accueil } from '../pages/accueil/accueil';
import { Stats } from '../pages/stats/stats';


export const routes: Routes = [

    {
        path: '', component: Accueil
    },



    {
        path: 'accueil', component: Accueil
    },

    {
        path: 'stats', component: Stats
    }

  

];
