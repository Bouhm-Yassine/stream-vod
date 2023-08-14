import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "user",
    loadComponent: () => import('./features/user-feature/user/user.component').then(c => c.UserComponent)
  },
  {
    path: "user/:username",
    loadComponent: () => import('./features/user-feature/user-details/user-details.component').then(c => c.UserDetailsComponent)
  },
  {
    path: "",
    redirectTo: "user",
    pathMatch: "full"
  }
]
