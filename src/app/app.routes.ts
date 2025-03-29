import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'set-up-profile',
        loadChildren: () => import('./modules/setup-profile/setup-profile.module').then((m) => m.SetupProfileModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
    }
];
