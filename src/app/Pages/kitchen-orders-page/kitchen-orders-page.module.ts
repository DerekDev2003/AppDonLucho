import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitchenOrdersPagePageRoutingModule } from './kitchen-orders-page-routing.module';

import { KitchenOrdersPagePage } from './kitchen-orders-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitchenOrdersPagePageRoutingModule
  ],
  declarations: [KitchenOrdersPagePage]
})
export class KitchenOrdersPagePageModule {}
