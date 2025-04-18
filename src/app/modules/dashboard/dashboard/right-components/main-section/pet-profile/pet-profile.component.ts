import { Component, Input } from '@angular/core';
import { PetProfileDetails } from '../../../../interfaces/pet-profile-details/pet-profile-details';

@Component({
  selector: 'app-pet-profile',
  standalone: false,
  
  templateUrl: './pet-profile.component.html',
  styleUrl: './pet-profile.component.scss'
})
export class PetProfileComponent {
  constructor() { }

  @Input() set petProfileDetails(value: PetProfileDetails) {
    this.isPetSelected = true;
  }

  isPetSelected: boolean = false;

  ngOnInit(): void {
    
  }
}
