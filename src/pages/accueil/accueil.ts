import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {

  name_prof: string = "Jordan";
  num_students = signal(5);
  private router = inject(Router);


  goto_notes() {
    console.log("oui  je suyis la ");
    this.router.navigateByUrl("/liste-notes"); }



}
