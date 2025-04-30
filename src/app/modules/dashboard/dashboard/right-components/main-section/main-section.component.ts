import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetProfileDetails } from '../../../interfaces/pet-profile-details/pet-profile-details';
import { PetProfileDetailsService } from '../../../services/main-section/petProfileDetails/pet-profile-details.service';

@Component({
  selector: 'app-main-section',
  standalone: false,
  
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  constructor(private petProfileDetailsService: PetProfileDetailsService) {}

  @Input() set petProfileDetails(value: PetProfileDetails) {
    this.petProfileDetailsService.petProfileDetails = value;

    this.petProfileDetailsService.onPetProfileDetailsChanged(value);
  };
}
