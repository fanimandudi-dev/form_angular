import { Component, inject, signal } from '@angular/core';
import { ApiServices, Post } from '../services/api-services';

@Component({
  selector: 'app-card-api',
  imports: [],
  templateUrl: './card-api.html',
  styleUrl: './card-api.css',
})
export class CardApi {


  private postService = inject(ApiServices);
  posts = signal<Post[]>([]);

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data: Post[]) => this.posts.set(data),
      error: (err: any) => console.error('Erreur API', err)
    });
  }

}
