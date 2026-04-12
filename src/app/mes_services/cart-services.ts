import { Injectable } from '@angular/core';
import { Produits } from './product-services';

@Injectable({
  providedIn: 'root',
})
export class CartServices {

  // Un simple tableau vide au départ
  cart: Produits[] = [];


  // Ajouter un produit à la liste
  addToCart(product: Produits) {
    this.cart.push(product);
  }


  getArticles(): Produits[] {
    return this.cart;
  }

  // Supprimer un produit via son ID
  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
  }

  // Calculer le total en additionnant les prix
  getTotalPrice(): number {
    let total = 0;
    for (let item of this.cart) {
      total += item.prix;
    }
    return total;
  }

  // Vider le tableau
  clearCart() {
    this.cart = [];
  }
  
}
