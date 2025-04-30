import { Component, Input } from '@angular/core';
import { PetProfileDetails } from '../../../../interfaces/pet-profile-details/pet-profile-details';
import { PetProfileDetailsService } from '../../../../services/main-section/petProfileDetails/pet-profile-details.service';

@Component({
  selector: 'app-pet-profile',
  standalone: false,
  
  templateUrl: './pet-profile.component.html',
  styleUrl: './pet-profile.component.scss'
})
export class PetProfileComponent {
  constructor(private petProfileDetailsService: PetProfileDetailsService) { }

  petProfileDetails!: PetProfileDetails;

  isPetSelected!: boolean;

  ngOnInit(): void {
    this.petProfileDetails = this.petProfileDetailsService.petProfileDetails;

    this.petProfileDetailsService.isPetSelectedSubjectObs.subscribe( val => {
      this.isPetSelected = val;
    })
  }
}
