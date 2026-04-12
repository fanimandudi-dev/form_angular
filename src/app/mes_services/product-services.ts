import { Injectable } from '@angular/core';

export interface Produits {
  id: number;
  nom: string;
  description: string;
  prix: number;
  image?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  produits: Produits[] = [
    {
      id: 1,
      nom: "Chaussure Running",
      description: "Chaussure de sport légère avec semelle amortissante pour le running.",
      prix: 85,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&h=300&fit=crop"
    },
    {
      id: 2,
      nom: "Casquette Vintage",
      description: "Casquette de sport ajustable en coton respirant.",
      prix: 25,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=400&h=300&fit=crop"
    },
    {
      id: 3,
      nom: "Short Performance",
      description: "Short de sport technique avec technologie anti-transpiration.",
      prix: 30,
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=400&h=300&fit=crop"
    },
    {
      id: 4,
      nom: "Basket Streetwear",
      description: "Chaussure de sport stylée pour un look urbain quotidien.",
      prix: 120,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=400&h=300&fit=crop"
    }
  ];

  getProduits(): Produits[] {
    return this.produits;
  }

  getProduits_id(id: number): Produits | undefined {
    return this.produits.find(produit => produit.id === id);
  }
}