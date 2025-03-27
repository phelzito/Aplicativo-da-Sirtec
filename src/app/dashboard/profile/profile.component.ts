import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [DatePipe, RouterModule],
  template: `
    <h2>Perfil</h2>
    <div class="profile-container">
      <div class="profile-info">
        <div class="info-item">
          <span class="label">Nome:</span>
          <span class="value">{{user.name}}</span>
        </div>
        <div class="info-item">
          <span class="label">E-mail:</span>
          <span class="value">{{user.email}}</span>
        </div>
        <div class="info-item">
          <span class="label">Data de Nascimento:</span>
          <span class="value">{{user.birthDate | date:'dd/MM/yyyy'}}</span>
        </div>
        <div class="info-item">
          <span class="label">Cargo:</span>
          <span class="value">{{user.position}}</span>
        </div>
        <div class="info-item">
          <span class="label">Matrícula:</span>
          <span class="value">{{user.registration}}</span>
        </div>
        <div class="info-item">
          <span class="label">Unidade:</span>
          <span class="value">{{user.unit}}</span>
        </div>
      </div>
      
      <div class="profile-actions">
        <button class="action-button" routerLink="/login">
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          Recuperar Senha
        </button>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      background: white;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .profile-info {
      margin-bottom: 2rem;
    }
    
    .info-item {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      border-bottom: 1px solid #eee;
    }
    
    .info-item:last-child {
      border-bottom: none;
    }
    
    .label {
      color: #666;
      font-weight: 500;
    }
    
    .value {
      color: #333;
    }
    
    .profile-actions {
      text-align: center;
    }
    
    .action-button {
      display: inline-flex;
      align-items: center;
      background: #007bff;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .action-button:hover {
      background: #0056b3;
      transform: translateY(-1px);
    }
    
    .action-button .icon {
      width: 20px;
      height: 20px;
      margin-right: 0.5rem;
    }
    
    @media (max-width: 480px) {
      .profile-container {
        padding: 1rem;
      }
      
      .info-item {
        flex-direction: column;
        gap: 0.25rem;
      }
      
      .action-button {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class ProfileComponent {
  user = {
    name: 'João Silva',
    email: 'joao.silva@empresa.com',
    birthDate: '1990-01-01',
    position: 'Desenvolvedor',
    registration: '12345',
    unit: 'São Paulo'
  };
}
