import { Routes } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { NewsComponent } from './news/news.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsDetailComponent } from './news/news-detail.component';

export const DASHBOARD_ROUTES: Routes = [
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'announcements', pathMatch: 'full' }
];
