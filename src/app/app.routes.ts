import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "user-search",
    loadComponent: () => import('./features/user-search/user-search.component').then(c => c.UserSearchComponent)
  },
  {
    path: "",
    redirectTo: "user-search",
    pathMatch: "full"
  }
]
