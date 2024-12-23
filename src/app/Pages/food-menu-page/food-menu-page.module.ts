import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodMenuPagePageRoutingModule } from './food-menu-page-routing.module';

import { FoodMenuPagePage } from './food-menu-page.page';
import { ViewProductsComponent } from 'src/app/components/view-products/view-products.component';
import { ViewOrderClientComponent } from 'src/app/components/view-order-client/view-order-client.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodMenuPagePageRoutingModule
  ],
  declarations: [
    FoodMenuPagePage,
    ViewProductsComponent,
    ViewOrderClientComponent
  ]
})
export class FoodMenuPagePageModule {}
