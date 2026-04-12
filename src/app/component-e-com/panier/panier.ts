import { Component } from '@angular/core';
import { CartServices } from '../../mes_services/cart-services';
import { NotificationService } from '../../mes_services/notification.service';

@Component({
  selector: 'app-panier',
  imports: [],
  providers:[NotificationService],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {

  constructor(
    public cartService: CartServices, // Injecté pour accéder aux items
    private notify: NotificationService // Instance locale pour le panier
  ) { }

  get items() {
    return this.cartService.getArticles();
  }

  calculerTotal() {
    return this.items.reduce((total, item) => total + item.prix, 0);
  }

  supprimerArticle(id: number) {
    this.cartService.removeFromCart(id);
   
  }

  viderLePanier() {
    this.cartService.clearCart();
 
  }
}


