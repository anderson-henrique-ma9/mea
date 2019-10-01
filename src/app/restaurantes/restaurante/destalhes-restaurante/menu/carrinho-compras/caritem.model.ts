import { MenuModel } from "../../menu.model";

export class CartItem {
  constructor(public menuItem: MenuModel, public quantity = 1) {

  }
}
