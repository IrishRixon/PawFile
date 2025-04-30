import { Component, Input } from '@angular/core';
import { PetProfileDetails } from '../../../../../interfaces/pet-profile-details/pet-profile-details';

@Component({
  selector: 'app-profile-message',
  standalone: false,
  
  templateUrl: './profile-message.component.html',
  styleUrl: './profile-message.component.scss'
})
export class ProfileMessageComponent {
  @Input() petProfileDetails!: PetProfileDetails;
}
