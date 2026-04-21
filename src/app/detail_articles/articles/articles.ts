import { Component, inject, OnInit } from '@angular/core';
import { ProductServices, Produits } from '../../mes_services/product-services';
import { CartServices } from '../../mes_services/cart-services';
import { NotificationService } from '../../mes_services/notification.service';
import { Router } from '@angular/router'; // Import pour la navigation

@Component({
  selector: 'app-articles',
  templateUrl: 'articles.html',
  styleUrl: 'articles.css',
  providers: [NotificationService],
})
export class Articles implements OnInit {
  // Injection des services
  private produit_services = inject(ProductServices);
  private cartService = inject(CartServices);
  private notify = inject(NotificationService);
  private router = inject(Router);

  // Données
  produitsAffiches: Produits[] = [];
  categories = ['Tous', 'Entrée', 'Plat', 'Dessert', 'Boisson'];
  categorieActuelle = 'Tous';

  ngOnInit() {
    // Initialisation au chargement
    this.produitsAffiches = this.produit_services.getProduits();
  }

  // Logique de filtrage simple
  filtrer(cat: string) {
    if (cat === 'Tous') {
     return this.tout_produit();
    }
    this.categorieActuelle = cat;
    this.produitsAffiches = this.produit_services.getProduitsParCategorie(cat);
  }

  tout_produit(){
    this.produitsAffiches=this.produit_services.getProduits();
  }

  // // Navigation vers les détails
  allerAuxDetails(id: number) {
    this.router.navigate(['/Details_article', id]);
  }

  // Action d'ajout au panier
  ajouterAuPanier(produit: Produits) {
    this.cartService.addToCart(produit);
    this.notify.addNotification(`"${produit.nom}" ajouté au panier !`);
  }
}