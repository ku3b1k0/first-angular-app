import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ServicesComponent } from './features/services/services.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us',
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Our Services',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Us',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page Not Found',
  },
];
