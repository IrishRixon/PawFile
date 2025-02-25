import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'set-up-profile',
        loadChildren: () => import('./modules/set-up-profile/set-up-profile.module').then((m) => m.SetUpProfileModule)
    }
];
