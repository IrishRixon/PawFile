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
  constructor(private petProfileDetailsService: PetProfileDetailsService) {
    console.log(petProfileDetailsService.petProfileDetails, 'profile pic');
  }
  
  profilePic!: string;
  name!: string;

  ngOnInit(): void {
    this.profilePic = this.petProfileDetailsService.petProfileDetails.petDetails.profilePic;
    this.name = this.petProfileDetailsService.petProfileDetails.petDetails.name;
  }
}
