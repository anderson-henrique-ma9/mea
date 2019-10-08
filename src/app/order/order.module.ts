import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderComponent } from "./order.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { FinalizeOrderComponent } from "./finalize-order/finalize-order.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTES: Routes = [{ path: "", component: OrderComponent}];

@NgModule({
  declarations: [OrderComponent, OrderItemsComponent, FinalizeOrderComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), FormsModule, ReactiveFormsModule]
})
export class OrderModule {}
