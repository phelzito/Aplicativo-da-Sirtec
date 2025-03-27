import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Documentos</h2>
    <div class="documents-grid">
      <div *ngFor="let document of documents" class="document-card">
        <svg class="document-icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
        <h3 class="document-title">{{ document.title }}</h3>
      </div>
    </div>
  `,
  styles: [`
    .documents-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .document-card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }
    
    .document-card:hover {
      transform: translateY(-2px);
    }
    
    .document-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 1rem;
      color: #007bff;
    }
    
    .document-title {
      margin: 0;
      font-size: 1rem;
    }
  `]
})
export class DocumentsComponent {
  documents = [
    { title: 'Manual do Usuário' },
    { title: 'Política de Segurança' },
    { title: 'Relatório Anual' },
    { title: 'Procedimentos Operacionais' }
  ];
}
