import { Component, Input } from '@angular/core';
import { PetProfileDetails } from '../../../../../../interfaces/pet-profile-details/pet-profile-details';
import { PetProfileDetailsService } from '../../../../../../services/main-section/petProfileDetails/pet-profile-details.service';

@Component({
  selector: 'app-profile-pic',
  standalone: false,
  
  templateUrl: './profile-pic.component.html',
  styleUrl: './profile-pic.component.scss'
})
export class ProfilePicComponent {
  constructor(private petProfileDetailsService: PetProfileDetailsService) {}
  
  petProfileDetails!: PetProfileDetails | null;

  ngOnInit(): void {
    this.petProfileDetailsService.petProfileDetailsObs.subscribe( petProfileDetails => {
      console.log(petProfileDetails, 'sub');
      this.petProfileDetails = petProfileDetails; 
    })
  }
}
