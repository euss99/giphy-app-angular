import { Routes } from "@angular/router";

const DashboardPage = () => import("@app/gifs/pages/dashboard/dashboard-page.component");
const GifsHistory = () => import("@app/gifs/pages/gifs-history/gifs-history.component");
const SearchPage = () => import("@app/gifs/pages/search/search-page.component");
const TrendingPage = () => import("@app/gifs/pages/trending/trending-page.component");

export const routes: Routes = [
  {
    path: "dashboard",
    loadComponent: DashboardPage,
    children: [
      {
        path: "search",
        loadComponent: SearchPage,
      },
      {
        path: "trending",
        loadComponent: TrendingPage,
      },
      {
        path: "history/:query",
        loadComponent: GifsHistory,
      },
      {
        path: "**",
        redirectTo: "trending",
      },
    ],
  },
  {
    path: "**",
    redirectTo: "dashboard",
  },
];
