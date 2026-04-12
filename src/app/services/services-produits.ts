import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesProduits {



  produits: Produit[] = [


    {
      id: 1,
      nom: "chaussure",
      description: "chaussure de sport",
      quantite: 10,
      prix: 50
    },

    {
      id: 2,
      nom: "casquette",
      description: "casquette de sport",
      quantite: 15,
      prix: 25
    },
    {
      id: 3,
      nom: "short",
      description: "short de sport",
      quantite: 20,
      prix: 30
    },
    {
      id: 4,
      nom: "chaussure",
      description: "chaussure de sport",
      quantite: 10,
      prix: 50
    }
    
    
  





  ]

  getAllProduits(): Produit[] {
    console.table(this.produits);
    return this.produits;
  }
}

export interface Produit {
  id: number;
  nom: string;
  description: string;
  quantite: number;
  prix: number;
}
