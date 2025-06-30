import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "dashboard",
    loadComponent: () =>
      import("@app/gifs/pages/dashboard/dashboard-page.component"),
    children: [
      {
        path: "search",
        loadComponent: () =>
          import("@app/gifs/pages/search/search-page.component"),
      },
      {
        path: "trending",
        loadComponent: () =>
          import("@app/gifs/pages/trending/trending-page.component"),
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
