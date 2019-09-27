import { SobreComponent } from './sobre/sobre.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

export const ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'restaurantes', component: RestaurantesComponent }
   
]