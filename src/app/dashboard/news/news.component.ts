import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Notícias</h2>
    <div class="news-list">
      <!-- Primeira notícia -->
      <div class="news-item first-item" [routerLink]="['/dashboard/news', news[0].id]">
        <div class="first-item-content">
          <img [src]="news[0].image" alt="" class="news-image-top">
          <div class="news-content">
            <h3 class="news-title">{{ news[0].title }}</h3>
            <p class="news-summary">{{ news[0].summary }}</p>
            <span class="news-date">{{ news[0].date }} - {{ news[0].time }}</span>
          </div>
        </div>
      </div>

      <!-- Demais notícias -->
      <div *ngFor="let newsItem of news.slice(1)" class="news-item" [routerLink]="['/dashboard/news', newsItem.id]">
        <div class="news-content">
          <h3 class="news-title secondary-title">{{ newsItem.title }}</h3>
          <span class="news-date">{{ newsItem.date }} - {{ newsItem.time }}</span>
        </div>
        <img [src]="newsItem.image" alt="" class="news-image-side">
      </div>
    </div>
  `,
  styles: [`
    .news-list {
      margin-top: 1rem;
    }
    
    .news-item {
      background: white;
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
    
    .news-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }
    
    .first-item {
      margin-bottom: 2rem;
    }
    
    .first-item-content {
      display: flex;
      flex-direction: column;
    }
    
    .news-image-top {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    
    .news-image-side {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
      margin-left: 1.5rem;
    }
    
    .news-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    
    .news-date {
      color: #666;
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }
    
    .news-title {
      margin: 0;
      font-size: 1.1rem;
      word-wrap: break-word;
      max-width: 100%;
    }
    
    .secondary-title {
      font-size: 0.9rem;
      margin-right: 1rem;
    }
    
    .news-summary {
      color: #444;
      line-height: 1.5;
      margin: 0.5rem 0;
    }
    
    @media (min-width: 768px) {
      .first-item-content {
        flex-direction: row;
        gap: 1.5rem;
      }
      
      .news-image-top {
        width: 40%;
        height: auto;
        margin-bottom: 0;
      }
      
      .news-image-side {
        width: 120px;
        height: 120px;
      }
    }

    @media (max-width: 767px) {
      .news-item {
        flex-direction: row;
        align-items: flex-start;
      }
      
      .news-image-side {
        width: 100px;
        height: 100px;
        margin-left: 1rem;
      }
      
      .news-title {
        max-width: 100%;
      }
    }
  `]
})
export class NewsComponent {
  news = [
    {
      id: 1,
      title: 'Novo sistema de gestão',
      summary: 'Estamos implementando um novo sistema de gestão que trará melhorias significativas...',
      date: '10/07/2024',
      time: '14:30',
      image: 'https://picsum.photos/800/400',
      content: 'Conteúdo completo da notícia 1...'
    },
    {
      id: 2,
      title: 'Treinamento de segurança',
      summary: 'Participe do treinamento de segurança que ocorrerá no dia 20/07...',
      date: '09/07/2024',
      time: '10:00',
      image: 'https://picsum.photos/801/400',
      content: 'Conteúdo completo da notícia 2...'
    },
    {
      id: 3,
      title: 'Atualização de políticas',
      summary: 'Novas políticas corporativas entrarão em vigor a partir do próximo mês...',
      date: '08/07/2024',
      time: '16:45',
      image: 'https://picsum.photos/802/400',
      content: 'Conteúdo completo da notícia 3...'
    }
  ];
}
