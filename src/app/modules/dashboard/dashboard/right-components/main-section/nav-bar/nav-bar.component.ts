import { Component } from '@angular/core';
import { Nav } from '../../../../interfaces/nav/nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private router: Router) {}
  navBtns: Nav[] = [
    {
      label: 'Pet Profile',
      command: () => { this.navigateTo('/dashboard') }
    },
    {
      label: 'Graph',
      command: () => { this.navigateTo('/dashboard/graph') }
    }
  ]

  navigateTo(url: string) {
    this.router.navigateByUrl(url)
  }
}
