import { SobreComponent } from "./sobre/sobre.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { DestalhesRestauranteComponent } from "./restaurantes/restaurante/destalhes-restaurante/destalhes-restaurante.component";
import { MenuComponent } from "./restaurantes/restaurante/destalhes-restaurante/menu/menu.component";
import { AvaliacoesComponent } from "./restaurantes/restaurante/destalhes-restaurante/avaliacoes/avaliacoes.component";
import { OrderComponent } from "./order/order.component";

export const ROUTES = [
  { path: "", component: HomeComponent },
  { path: "sobre", component: SobreComponent },
  { path: "restaurantes", component: RestaurantesComponent },
  {
    path: "restaurantes/:id",
    component: DestalhesRestauranteComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuComponent },
      { path: "avaliacoes", component: AvaliacoesComponent }
    ]
  },
  { path: "order", component: OrderComponent }
];
