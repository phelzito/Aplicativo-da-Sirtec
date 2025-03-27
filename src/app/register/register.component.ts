import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  template: `
    <div class="register-container">
      <h2>Cadastro</h2>
      <form #registerForm="ngForm" (ngSubmit)="onSubmit(registerForm)">
        <input type="text" [(ngModel)]="user.name" name="name" placeholder="Nome completo" required>
        <input type="email" [(ngModel)]="user.email" name="email" placeholder="E-mail" required>
        <input type="date" [(ngModel)]="user.birthDate" name="birthDate" placeholder="Data de nascimento" required>
        <input type="text" [(ngModel)]="user.position" name="position" placeholder="Cargo" required>
        <input type="text" [(ngModel)]="user.registration" name="registration" placeholder="Matrícula" required>
        <select [(ngModel)]="user.unit" name="unit" required>
          <option value="" disabled selected>Selecione sua unidade</option>
          <option *ngFor="let unit of units" [value]="unit">{{unit}}</option>
        </select>
        <button type="submit">Cadastrar</button>
        <button type="button" (click)="fillTestUser()" class="test-user-btn">Usar dados de teste</button>
      </form>
      <p>Já tem uma conta? <a routerLink="/login">Faça login</a></p>
    </div>
  `,
  styles: [`
    .register-container {
      max-width: 400px;
      margin: 2rem auto;
      padding: 2rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    input, select {
      width: 100%;
      padding: 0.5rem;
      margin: 0.5rem 0;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      width: 100%;
      padding: 0.5rem;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button[type="submit"] {
      background-color: #28a745;
    }
    .test-user-btn {
      background-color: #ffc107;
      margin-top: 1rem;
    }
  `]
})
export class RegisterComponent {
  units = [
    'São Borja',
    'São Leopoldo',
    'Fortaleza',
    'Barreiras',
    'Ibotirama',
    'Luis Eduardo Magalhães',
    'Guanambi',
    'Bom Jesus da Lapa',
    'Brumado',
    'Livramento de Nossa Senhora',
    'Vitória da Conquista',
    'Jequié',
    'Itapetinga',
    'Feira de Santana',
    'Serrinha',
    'Itaberaba',
    'Irecê'
  ];

  user = {
    name: '',
    email: '',
    birthDate: '',
    position: '',
    registration: '',
    unit: ''
  };

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Add registration logic here
      this.router.navigate(['/dashboard']);
    }
  }

  fillTestUser() {
    this.user = {
      name: 'João Silva',
      email: 'joao.silva@teste.com',
      birthDate: '1990-01-15',
      position: 'Analista de Sistemas',
      registration: '123456',
      unit: 'São Leopoldo'
    };
  }
}
