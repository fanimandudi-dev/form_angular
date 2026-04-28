import { Injectable } from '@angular/core';

export interface Produits {
  stock: number;
  id: number;
  nom: string;
  description: string;
  prix: number;
  categorie: 'Entrée' | 'Plat' | 'Dessert' | 'Boisson';
  image: string;
  details: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  private produits: Produits[] = [
    // --- ENTRÉES ---
    {
      id: 1, nom: "Velouté de Potiron", categorie: 'Entrée', prix: 8,
      stock:50,
      description: "Un velouté onctueux servi avec des éclats de châtaignes.",
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400",
      details: ["Potiron bio", "Crème fraîche", "Châtaignes grillées", "Sans gluten"]
    },
    {
      id: 2, nom: "Salade César", categorie: 'Entrée', prix: 12, stock: 50,
      description: "Laitue romaine, poulet grillé, croûtons et sauce maison.",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400",
      details: ["Poulet fermier", "Parmesan AOP", "Sauce anchois", "Croûtons ailés"]
    },
    {
      id: 3, nom: "Carpaccio de Bœuf", categorie: 'Entrée', prix: 14, stock: 50,
      description: "Fines tranches de bœuf, roquette et copeaux de parmesan.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
      details: ["Viande bovine française", "Huile d'olive vierge", "Citron frais"]
    },
    {
      id: 4, nom: "Bruschetta Tomate", categorie: 'Entrée', prix: 9, stock: 50,
      description: "Pain grillé frotté à l'ail avec tomates fraîches et basilic.",
      image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?w=400",
      details: ["Pain de campagne", "Tomates cerises", "Basilic frais", "Végétarien"]
    },
    {
      id: 5, nom: "Nems aux Crevettes", categorie: 'Entrée', prix: 10,  stock:50,
      description: "Quatre nems croustillants servis avec menthe et salade.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
      details: ["Crevettes sauvages", "Galette de riz", "Sauce nuoc-mâm"]
    },
    {
      id: 6, nom: "Tartare de Saumon", categorie: 'Entrée', prix: 15, stock: 50,
      description: "Saumon frais coupé au couteau, avocat et aneth.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
      details: ["Saumon Atlantique", "Avocat Hass", "Échalotes", "Citron vert"]
    },
    {
      id: 7, nom: "Camembert Rôti", categorie: 'Entrée', prix: 11,  stock:50,
      description: "Camembert entier au four, miel et romarin.",
      image: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=400",
      details: ["Camembert au lait cru", "Miel de fleurs", "Servi avec pain grillé"]
    },

    // --- PLATS ---
    {
      id: 8, nom: "Entrecôte Grillée", categorie: 'Plat', prix: 24, stock: 50,
      description: "Pièce de bœuf grillée au feu de bois, frites maison.",
      image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400",
      details: ["Bœuf maturation 21 jours", "Beurre maître d'hôtel", "Frites au couteau"]
    },
    {
      id: 9, nom: "Risotto aux Champignons", categorie: 'Plat', prix: 18, stock: 50,
      description: "Riz Arborio crémeux aux pleurotes et huile de truffe.",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400",
      details: ["Riz italien", "Mélange forestier", "Parmesan", "Végétarien"]
    },
    {
      id: 10, nom: "Pavé de Cabillaud", categorie: 'Plat', prix: 21,  stock:50,
      description: "Cabillaud rôti, purée de patate douce et sauce vierge.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400",
      details: ["Pêche durable", "Patate douce bio", "Légumes de saison"]
    },
    {
      id: 11, nom: "Burger Gourmet", categorie: 'Plat', prix: 17,  stock:50,
      description: "Steak haché, cheddar affiné, oignons confits.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
      details: ["Pain brioché", "Cheddar 12 mois", "Sauce secrète"]
    },
    {
      id: 12, nom: "Lasagnes Maison", categorie: 'Plat', prix: 16,  stock:50,
      description: "Lasagnes à la bolognaise traditionnelle gratinées au four.",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400",
      details: ["Pâtes fraîches", "Bœuf et Porc", "Béchamel maison"]
    },
    {
      id: 13, nom: "Poulet Tikka Masala", categorie: 'Plat', prix: 19,  stock:50,
      description: "Poulet mariné aux épices, sauce tomate crémeuse et riz basmati.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
      details: ["Épices indiennes", "Riz long grain", "Coriandre fraîche"]
    },
    {
      id: 14, nom: "Magret de Canard", categorie: 'Plat', prix: 26,  stock:50,
      description: "Magret sauce miel et épices, écrasé de pommes de terre.",
      image: "https://images.unsplash.com/photo-1511216113906-8f57bb83e776?w=400",
      details: ["Origine Sud-Ouest", "Sauce aigre-douce", "Cuisson rosée conseillée"]
    },
    {
      id: 15, nom: "Pâtes à la Carbonara", categorie: 'Plat', prix: 15,  stock:50,
      description: "La vraie recette italienne : guanciale, œuf et pecorino.",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
      details: ["Spaghetti frais", "Guanciale poivré", "Sans crème fraîche"]
    },

    // --- DESSERTS ---
    {
      id: 16, nom: "Tiramisu Classique", categorie: 'Dessert', prix: 8,  stock:50,
      description: "Biscuit imbibé au café, mascarpone aérien et cacao.",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
      details: ["Mascarpone frais", "Café Arabica", "Recette traditionnelle"]
    },
    {
      id: 17, nom: "Fondant au Chocolat", categorie: 'Dessert', prix: 9,  stock:50,
      description: "Cœur coulant, servi avec une boule de glace vanille.",
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400",
      details: ["Chocolat noir 70%", "Glace artisanale", "Cuit minute"]
    },
    {
      id: 18, nom: "Crème Brûlée", categorie: 'Dessert', prix: 7, stock: 50,
      description: "Crème onctueuse à la vanille de Madagascar bourbon.",
      image: "https://images.unsplash.com/photo-1470333738027-50dc61d33ed4?w=400",
      details: ["Vanille naturelle", "Sucre roux caramélisé", "Œufs plein air"]
    },
    {
      id: 19, nom: "Tarte Tatin", categorie: 'Dessert', prix: 8, stock: 50,
      description: "Tarte aux pommes caramélisées et crème fraîche épaisse.",
      image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400",
      details: ["Pommes Golden", "Beurre demi-sel", "Servie chaude"]
    },
    {
      id: 20, nom: "Salade de Fruits", categorie: 'Dessert', prix: 6,  stock:50,
      description: "Fruits frais de saison découpés avec sirop de menthe.",
      image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=400",
      details: ["Fruits mûrs", "Sans sucre ajouté", "Frais du matin"]
    },
    {
      id: 21, nom: "Mousse au Chocolat", categorie: 'Dessert', prix: 7,  stock:50,
      description: "Mousse légère et intense au chocolat noir.",
      image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=400",
      details: ["Sans conservateur", "Texture ferme et aérée"]
    },
    {
      id: 22, nom: "Cheesecake Citron", categorie: 'Dessert', prix: 9,  stock:50,
      description: "Base croquante et crème citronnée rafraîchissante.",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400",
      details: ["Zestes de citron bio", "Biscuit spéculoos"]
    },

    // --- BOISSONS ---
    {
      id: 23, nom: "Limonade Maison", categorie: 'Boisson', prix: 5,  stock:50,
      description: "Citron pressé, sucre de canne et eau pétillante.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400",
      details: ["Faite à la commande", "Menthe fraîche"]
    },
    {
      id: 24, nom: "Verre de Vin Rouge", categorie: 'Boisson', prix: 7,  stock:50,
      description: "Sélection du sommelier, cépage Merlot.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400",
      details: ["12.5% vol.", "Accord viandes rouges"]
    },
    {
      id: 25, nom: "Café Expresso", categorie: 'Boisson', prix: 2.5, stock: 50,
      description: "Un café court et intense.",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400",
      details: ["Torréfaction artisanale", "100% Arabica"]
    },
    {
      id: 26, nom: "Thé Glacé Pêche", categorie: 'Boisson', prix: 5,  stock:50,
      description: "Thé infusé froid, sirop de pêche et glaçons.",
      image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400",
      details: ["Infusion 12h", "Faible en sucre"]
    },
    {
      id: 27, nom: "Bière Artisanale", categorie: 'Boisson', prix: 6.5, stock: 50,
      description: "Blonde locale de type IPA, notes d'agrumes.",
      image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400",
      details: ["Brassée en ville", "33cl"]
    },
    {
      id: 28, nom: "Cocktail Mojito", categorie: 'Boisson', prix: 10, stock: 50,
      description: "Rhum, citron vert, menthe fraîche et soda.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400",
      details: ["Glacé", "Produits frais"]
    },
    {
      id: 29, nom: "Eau Minérale", categorie: 'Boisson', prix: 4, stock: 50,
      description: "Eau de source naturelle, plate ou gazeuse.",
      image: "https://images.unsplash.com/photo-1559839914-17aae19cea71?w=400",
      details: ["75cl", "Servie fraîche"]
    },
    {
      id: 30, nom: "Jus d'Orange Frais", categorie: 'Boisson', prix: 6, stock: 50,
      description: "Oranges pressées minute devant vous.",
      image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400",
      details: ["100% pur jus", "Vitamines préservées"]
    }
  ];

  constructor() { }

  // Retourne tous les articles
  getProduits(): Produits[] {
    return this.produits;
  }

  // Filtrage par catégorie
  getProduitsParCategorie(cat: string): Produits[] {
    return this.produits.filter(p => p.categorie === cat);
  }

  // Recherche par ID
  getProduits_id(id: number): Produits | undefined {
    return this.produits.find(produit => produit.id === id);
  }
}