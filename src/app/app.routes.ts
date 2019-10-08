import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { DestalhesRestauranteComponent } from "./restaurantes/restaurante/destalhes-restaurante/destalhes-restaurante.component";
import { MenuComponent } from "./restaurantes/restaurante/destalhes-restaurante/menu/menu.component";
import { AvaliacoesComponent } from "./restaurantes/restaurante/destalhes-restaurante/avaliacoes/avaliacoes.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const ROUTES = [
  { path: "", component: HomeComponent },
  {
    path: "sobre",
    loadChildren: () =>
      import("./sobre/sobre.module").then(module => module.SobreModule)
  },
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
  {
    path: "order",
    loadChildren: () =>
      import("./order/order.module").then(mod => mod.OrderModule)
  },
  { path: "order-summary", component: OrderSummaryComponent },
  { path: '**', component: PageNotFoundComponent }
];
