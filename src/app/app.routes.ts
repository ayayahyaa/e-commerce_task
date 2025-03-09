import { CategoriesComponent } from './pages/categories/categories/categories.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';

export const routes: Routes = [

  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [logedGuard] ,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
        title: 'login'
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
        title: 'register'
      }
      ,{
        path: 'forgot',
        loadComponent: () => import('./pages/forgotpassword/forgotpassword.component').then(m => m.ForgotpasswordComponent),
        title: 'forgot'
      }
    ]
  },
      {
    path: '',
    component: BlankLayoutComponent,
    canActivate: [authGuard] ,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'home'
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent),
        title: 'cart'
      },
      {
        path: 'products',
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductComponent),
        title: 'products'
      },   {
        path: 'orders/:id',
        loadComponent: () => import('./pages/orders/orders.component').then(m => m.OrdersComponent),
        title: 'orders'
      },
      {
        path: 'brands',
        loadComponent: () => import('./pages/brands/brands.component').then(m => m.BrandsComponent),
        title: 'brands'
      },

      {
        path: 'categories',
        loadComponent: () => import('./pages/categories/categories/categories.component').then(m => m.CategoriesComponent),
        title: 'categories' ,
      },
      {
        path: 'checkout/:id',
        loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent),
        title: 'checkout'
      },
      {
        path: 'details/:id',
        loadComponent: () => import('./pages/details/details.component').then(m => m.DetailsComponent),
        title: 'details' ,
      },
      {
        path: '**',
        component:NotfoundComponent
      },
    ]
  }
];
