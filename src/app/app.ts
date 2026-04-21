import { Component, inject } from '@angular/core';
import { CardProduit } from "./component-e-com/card-produit/card-produit";
import { RouterModule } from "@angular/router";
import { Panier } from "./component-e-com/panier/panier";
import { Articles } from "./detail_articles/articles/articles";
@Component({
  selector: 'app-root',
  imports: [CardProduit, RouterModule, Panier, Articles],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}






// import { Component, inject } from '@angular/core';
// import { CommonModule} from '@angular/common';
// import { LoginComponent } from './Components/login/login';
// import { TaskList } from './Components/task-list/task-list';
// import { TaskForm } from './Components/task-form/task-form';
// import { AuthService } from './mes_services/auth.service';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, LoginComponent, TaskList, TaskForm],
//   template: `
//     <div class="app">
//       <h1>🚀 Task Manager - Angular DI Demo</h1>
      
//       <app-login></app-login>

//       <div *ngIf="auth.isAuthenticated()">
//         <app-task-form></app-task-form>
//         <app-task-list></app-task-list>
//       </div>

//       <div *ngIf="!auth.isAuthenticated()" class="locked">
//         <p>🔒 Connectez-vous pour accéder aux tâches</p>
//       </div>
//     </div>
//   `,
//   styles: [`
//     .app {
//       font-family: Arial, sans-serif;
//       max-width: 800px;
//       margin: 0 auto;
//     }
//     h1 {
//       text-align: center;
//       color: #333;
//     }
//     .locked {
//       text-align: center;
//       padding: 40px;
//       background: #f0f0f0;
//       border-radius: 10px;
//       margin: 20px;
//     }
//   `]
// })
// export class App {
//   auth = inject(AuthService);
// }


// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Header } from '../components/header/header';
// import { Accueil } from '../pages/accueil/accueil';
// import {CardStat } from '../components/card-stat/card-stat';
// import { Ecran } from './ecran/ecran';
// import { Meteo } from "./meteo/meteo";
// import { CarteFilm } from "./carte-film/carte-film";
// import { Login } from "./login/login";
// import { Dashboard } from "./dashboard/dashboard";
// import { Menu } from "./menu/menu";
// import { Button } from "./button/button";

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, Header, CardStat, Ecran, Meteo, CarteFilm, Login, Dashboard, Menu, Button],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
 
// }