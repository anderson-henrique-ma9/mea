import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { DestalhesRestauranteComponent } from "./restaurantes/restaurante/destalhes-restaurante/destalhes-restaurante.component";
import { MenuComponent } from "./restaurantes/restaurante/destalhes-restaurante/menu/menu.component";
import { AvaliacoesComponent } from "./restaurantes/restaurante/destalhes-restaurante/avaliacoes/avaliacoes.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./security/login/login.component";
import { LoggedInGuard } from "./security/loggedin.guard";
import { UserFormComponent } from "./header/user-detail/user-form/user-form.component";

export const ROUTES = [
  { path: "", component: HomeComponent },
  { path: "login/:to", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "sobre",
    loadChildren: () =>
      import("./sobre/sobre.module").then(module => module.SobreModule)
  },
  {
    path: "restaurantes/:id",
    component: DestalhesRestauranteComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuComponent },
      { path: "avaliacoes", component: AvaliacoesComponent }
    ]
  },
  { path: "restaurantes", component: RestaurantesComponent },
  {
    path: "order",
    loadChildren: () =>
      import("./order/order.module").then(mod => mod.OrderModule),
    canLoad: [LoggedInGuard],
    canActivate: [LoggedInGuard]
  },
  { path: "order-summary", component: OrderSummaryComponent },
  {
    path: "user-details",
    component: UserFormComponent
  },
  { path: "**", component: PageNotFoundComponent }
];
