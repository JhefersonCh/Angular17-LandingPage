import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '', 
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.routes').then(
            (m) => m.homeRoutes
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
