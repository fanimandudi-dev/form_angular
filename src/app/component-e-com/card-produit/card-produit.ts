import { Component, inject } from '@angular/core';
import { ProductServices, Produits } from '../../mes_services/product-services';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../mes_services/notification.service';
import { CartServices } from '../../mes_services/cart-services';

@Component({
  selector: 'app-card-produit',
  imports: [],
  providers: [NotificationService],
  templateUrl: './card-produit.html',
  styleUrl: './card-produit.css',
})
export class CardProduit {
  produit_services: ProductServices = inject(ProductServices);
  produits: Produits[] = [];
  private cartService: CartServices = inject(CartServices);
  private notify: NotificationService = inject(NotificationService);

  constructor() {

    this.produits = this.produit_services.getProduits();
  }


  ajouterAuPanier(produit: Produits) {
    // 1. On appelle le service du panier (Global)
    console.log("je suis cliqué");
    this.cartService.addToCart(produit);

  

    this.notify.addNotification(` "${produit.nom}" ajouté au panier !`);
    
    console.log("je suis cliqué 2");


  }


}
