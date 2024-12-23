import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitchenOrdersPagePage } from './kitchen-orders-page.page';

const routes: Routes = [
  {
    path: '',
    component: KitchenOrdersPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitchenOrdersPagePageRoutingModule {}
