import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Accueil } from '../pages/accueil/accueil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Accueil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projet');
}
