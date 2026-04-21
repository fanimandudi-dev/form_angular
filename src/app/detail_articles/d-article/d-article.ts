import { Component, inject } from '@angular/core';
import { ProductServices, Produits } from '../../mes_services/product-services';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-d-article',
  imports: [RouterLink],
  templateUrl: './d-article.html',
  styleUrl: './d-article.css',
})
export class DArticle {


  // 1. On injecte les outils nécessaires
  private route = inject(ActivatedRoute);
  private productServices = inject(ProductServices);

  article: Produits | undefined;

  ngOnInit() {
    // 2. On récupère l'ID depuis l'URL (snapshot = photo à l'instant T)
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // 3. On demande au service de trouver l'article
    this.article = this.productServices.getProduits_id(id);
  }

}
