import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {path: 'about', component: AboutComponent, title: 'About'},
  {path: 'projects', component: ProjectsComponent, title: 'Projects'},
  //TODO: add in a future
  /* {path: 'experience', component: ExperienceComponent, title: 'Experiencie'}, */
  {path: 'contact', component: ContactComponent, title: 'Contact'},
  {path: '', redirectTo:'/about', pathMatch: 'full'},
  //TODO: agregar pagina notFound
  /* {path: '**', } */
];
