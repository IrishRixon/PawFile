import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() isPetMissing: boolean = false;
  @Output() openDrawer: EventEmitter<void> = new EventEmitter<void>()

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

  emitOpenDrawer() {
    this.openDrawer.emit();
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url)
  }
}
