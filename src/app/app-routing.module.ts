import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, AuthInverseGuard } from '@app-core/guard';
import { AuthLayoutComponent, FeaturedLayoutComponent } from '@app-core/layouts/layout-blueprints';

const routes: Routes = [
  {
    path: "auth",
    component: AuthLayoutComponent,
    canActivate: [AuthInverseGuard],
    children: [
      {
        path: "",
        loadChildren: () => import("@app-auth-modules/auth-pages.module").then(m => m.AuthPagesModule)
      }
    ]
  },
  {
    path: "",
    component: FeaturedLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: () => import("@app-featured-modules/featured-pages.module").then(m => m.FeaturedPagesModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
