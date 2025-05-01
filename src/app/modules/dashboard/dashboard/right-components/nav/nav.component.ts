import { Component } from '@angular/core';
import { Nav } from '../../../interfaces/nav/nav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: false,
  
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
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
