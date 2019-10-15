
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', component: HomeComponent }

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
