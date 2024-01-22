import { Routes } from "@angular/router";

export const homeRoutes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    loadComponent: () => 
      import('./pages/principal/principal.component').then(
        m => m.PrincipalComponent
      )
  },
  {
    path: 'products',
    loadComponent: () => 
      import('./pages/products/products.component').then(
        m => m.ProductsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () => 
      import('./pages/contact/contact.component').then(
        m => m.ContactComponent
      )
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];