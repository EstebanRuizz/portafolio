import { Routes } from '@angular/router';

import { AboutComponent } from './presentation/about/about.component';
import { CodeComponent } from './presentation/code/code.component';
import { ContactComponent } from './presentation/contact/contact.component';
import { CoursesComponent } from './presentation/courses/courses.component';
import { ExperienceComponent } from './presentation/experience/experience.component';
import { HomeComponent } from './presentation/home/home.component';
import { ProjectsComponent } from './presentation/projects/projects.component';
import { StackComponent } from './presentation/stack/stack.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'stack',
    component: StackComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'code',
    component: CodeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
