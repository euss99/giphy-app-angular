import { Routes } from '@angular/router';

import Layout from './gifs/layouts/layout.component';

const DashboardPage = () => import('./gifs/pages/dashboard/dashboard-page.component');
const SearchPage = () => import('./gifs/pages/search/search-page.component');
const TrendingPage = () => import('./gifs/pages/trending/trending-page.component');

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        loadComponent: DashboardPage,
      },
      {
        path: 'search',
        loadComponent: SearchPage,
      },
      {
        path: 'trending',
        loadComponent: TrendingPage,
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
