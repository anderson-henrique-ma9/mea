import { NgModule, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderComponent } from "./order.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { FinalizeOrderComponent } from "./finalize-order/finalize-order.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LeaveOrderGuard } from "./leave-order.guard";
import { CoreModule } from "../core/core.module";

const ROUTES: Routes = [{ path: "", component: OrderComponent }];

@NgModule({
  declarations: [OrderComponent, OrderItemsComponent, FinalizeOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class OrderModule {}
