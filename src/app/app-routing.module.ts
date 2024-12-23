import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'food-menu-page',
    loadChildren: () => import('./Pages/food-menu-page/food-menu-page.module').then( m => m.FoodMenuPagePageModule)
  },
  {
    path: 'c',
    loadChildren: () => import('./Pages/kitchen-orders-page/kitchen-orders-page.module').then( m => m.KitchenOrdersPagePageModule)
  },
  {
    path: 'kitchen-orders-page',
    loadChildren: () => import('./Pages/kitchen-orders-page/kitchen-orders-page.module').then( m => m.KitchenOrdersPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
