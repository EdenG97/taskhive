import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { AuthComponent } from './core/components/auth/auth.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { BoardsComponent } from './features/boards/boards.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { IssuesComponent } from './features/issues/issues.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { HomeLayoutComponent } from './shared/components/layout/home-layout/home-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivateChild: [authGuard],
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'boards',
        component: BoardsComponent,
      },
      {
        path: 'issues',
        component: IssuesComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
    ],
  },
];
