import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/public-layout/public-layout.component').then(
        m => m.PublicLayoutComponent,
      ),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.routes').then(m => m.HOME_ROUTES),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('./features/menu/menu.routes').then(m => m.MENU_ROUTES),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
