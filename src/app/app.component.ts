import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pawfile';

  constructor(private primeng: PrimeNG) {
    this.primeng.theme.set({
        preset: Lara,
            options: {
                cssLayer: {
                    name: 'primeng',
                    order: 'tailwind-base, primeng, tailwind-utilities'
                },
                darkModeSelector: 'my-app-dark'
            }
        })
    }
}
