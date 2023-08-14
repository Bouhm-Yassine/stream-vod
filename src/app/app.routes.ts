import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "user",
    loadComponent: () => import('./features/user-feature/user/user.component').then(c => c.UserComponent)
  },
  {
    path: "",
    redirectTo: "user",
    pathMatch: "full"
  }
]
