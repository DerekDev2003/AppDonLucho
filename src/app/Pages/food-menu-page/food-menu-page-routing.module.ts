import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodMenuPagePage } from './food-menu-page.page';

const routes: Routes = [
  {
    path: '',
    component: FoodMenuPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodMenuPagePageRoutingModule {}
