import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductServices, Produits } from '../mes_services/product-services';
import { Produit } from '../services/services-produits';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,Menu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  produitService = inject(ProductServices);
  stats: any[] = [];
  derniersProduits: Produits[] = [];
  prods:Produits[] = this.produitService.getProduits();


  ngOnInit() {
   
    this.stats = [
      { label: 'Total Produits', value: this.prods.length, color: 'bg-blue-600' },
      { label: 'En Rupture', value: this.prods.filter(p => p.stock === 0).length, color: 'bg-red-500' },
      { label: 'Valeur Stock', value: this.prods.reduce((acc, p) => acc + (p.prix * p.stock), 0) + '$', color: 'bg-green-500' },
      { label: 'Catégories', value: new Set(this.prods.map(p => p.categorie)).size, color: 'bg-purple-500' }
    ];

    // Les 5 derniers ajoutés
  }


  // // Données fictives pour l'instant
  // stats = [
  //   { label: 'Total Intercesseurs', value: 124, icon: 'users', color: 'bg-blue-500' },
  //   { label: 'Présents Aujourd\'hui', value: 98, icon: 'check', color: 'bg-green-500' },
  //   { label: 'Absences Critiques', value: 5, icon: 'alert', color: 'bg-red-500' },
  //   { label: 'Taux de Présence', value: '82%', icon: 'chart', color: 'bg-purple-500' }
  // ];

  // recentActivities = [
  //   { intercesseur: 'Mondo Stephen', action: 'Présence marquée', heure: '08:15', session: 'Prière Matinale' },
  //   { intercesseur: 'Kabwe Jean', action: 'Retard signalé', heure: '08:45', session: 'Session Technique' },
  //   { intercesseur: 'Luzolo Marie', action: 'Absence justifiée', heure: '09:00', session: 'Prière Matinale' }
  // ];

}
