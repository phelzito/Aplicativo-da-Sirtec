import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="news-detail">
      <button class="back-button" (click)="goBack()">← Voltar</button>
      <h1>{{ newsItem?.title }}</h1>
      <img [src]="newsItem?.image" alt="" class="news-image">
      <div class="news-meta">
        <span class="news-date">{{ newsItem?.date }} - {{ newsItem?.time }}</span>
      </div>
      <div class="news-content">
        <p>{{ newsItem?.content }}</p>
      </div>
    </div>
  `,
  styles: [`
    .news-detail {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    .back-button {
      background: none;
      border: none;
      color: #007bff;
      cursor: pointer;
      font-size: 1rem;
      margin-bottom: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: all 0.3s ease;
    }
    
    .back-button:hover {
      background: rgba(0, 123, 255, 0.1);
    }
    
    h1 {
      margin-bottom: 1rem;
    }
    
    .news-image {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 1.5rem;
    }
    
    .news-meta {
      color: #666;
      margin-bottom: 1.5rem;
    }
    
    .news-content {
      line-height: 1.6;
      color: #333;
    }
    
    .news-content p {
      margin-bottom: 1rem;
    }
  `]
})
export class NewsDetailComponent {
  newsItem: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const newsId = Number(this.route.snapshot.paramMap.get('id'));
    this.newsItem = this.getNewsById(newsId);
  }

  getNewsById(id: number) {
    const news = [
      {
        id: 1,
        title: 'Novo sistema de gestão',
        content: 'Conteúdo completo da notícia 1...',
        date: '10/07/2024',
        time: '14:30',
        image: 'https://picsum.photos/800/400'
      },
      {
        id: 2,
        title: 'Treinamento de segurança',
        content: 'Conteúdo completo da notícia 2...',
        date: '09/07/2024',
        time: '10:00',
        image: 'https://picsum.photos/801/400'
      },
      {
        id: 3,
        title: 'Atualização de políticas',
        content: 'Conteúdo completo da notícia 3...',
        date: '08/07/2024',
        time: '16:45',
        image: 'https://picsum.photos/802/400'
      }
    ];
    return news.find(item => item.id === id);
  }

  goBack() {
    window.history.back();
  }
}
