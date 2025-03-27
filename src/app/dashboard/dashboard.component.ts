import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-container">
      <div class="content">
        <router-outlet></router-outlet>
      </div>
      <nav class="footer-nav">
        <ul>
          <li>
            <a routerLink="/dashboard/announcements" routerLinkActive="active">
              <svg class="icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <span>Comunicados</span>
            </a>
          </li>
          <li>
            <a routerLink="/dashboard/news" routerLinkActive="active">
              <svg class="icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
              </svg>
              <span>Notícias</span>
            </a>
          </li>
          <li>
            <a routerLink="/dashboard/documents" routerLinkActive="active">
              <svg class="icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              <span>Documentos</span>
            </a>
          </li>
          <li>
            <a routerLink="/dashboard/profile" routerLinkActive="active">
              <svg class="icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <span>Perfil</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  `,
  styles: [`
    .dashboard-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    
    .content {
      flex: 1;
      padding: 1rem;
      overflow-y: auto;
    }
    
    .footer-nav {
      background: #ffffff;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      padding: 0.5rem 0;
    }
    
    .footer-nav ul {
      display: flex;
      justify-content: space-around;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-nav a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #666;
      padding: 0.5rem;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .footer-nav a.active {
      color: #007bff;
      background: rgba(0, 123, 255, 0.1);
    }
    
    .footer-nav .icon {
      width: 24px;
      height: 24px;
      margin-bottom: 0.25rem;
      transition: all 0.3s ease;
    }
    
    .footer-nav a.active .icon {
      transform: translateY(-2px);
    }
    
    .footer-nav span {
      font-size: 0.875rem;
    }
    
    @media (max-width: 480px) {
      .footer-nav span {
        font-size: 0.75rem;
      }
      
      .footer-nav .icon {
        width: 20px;
        height: 20px;
      }
    }
  `]
})
export class DashboardComponent {}
