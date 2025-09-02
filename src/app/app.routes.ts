import { Routes } from '@angular/router';

// Import your components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.Component';
import { ContactComponent } from './contact/contact.Component';

// Define the routes
export const routes: Routes = [
  { path: '', component: HomeComponent },       // Home route (default)
  { path: 'about', component: AboutComponent },  // About route
  { path: 'contact', component: ContactComponent } // Contact route
];
