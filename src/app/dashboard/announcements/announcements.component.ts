import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Comunicados</h2>
    <div class="announcements-grid">
      <div *ngFor="let announcement of announcements" class="card" [class.urgent]="announcement.urgent">
        <div class="card-header">
          <span class="tag" *ngIf="announcement.urgent">Urgente</span>
          <span class="date">{{ announcement.date }}</span>
        </div>
        <div class="card-body">
          <h3>{{ announcement.title }}</h3>
          <p>{{ announcement.content }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .announcements-grid {
      display: grid;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .card {
      background: white;
      border-radius: 8px;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      border-left: 4px solid #ddd;
    }
    
    .card.urgent {
      border-left-color: #ff4444;
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    
    .tag {
      background: #ff4444;
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
    }
    
    .date {
      color: #666;
      font-size: 0.875rem;
    }
  `]
})
export class AnnouncementsComponent {
  announcements = [
    {
      title: 'Manutenção programada',
      content: 'No dia 15/07 haverá manutenção no sistema das 00:00 às 04:00.',
      date: '10/07/2024',
      urgent: false
    },
    {
      title: 'Falha crítica no sistema',
      content: 'Identificamos uma falha crítica que será corrigida imediatamente.',
      date: '09/07/2024',
      urgent: true
    }
  ];
}
