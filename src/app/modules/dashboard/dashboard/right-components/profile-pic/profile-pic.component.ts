import { Component, Input } from '@angular/core';
import { PetProfileDetails } from '../../../interfaces/pet-profile-details/pet-profile-details';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';

@Component({
  selector: 'app-profile-pic',
  standalone: false,
  
  templateUrl: './profile-pic.component.html',
  styleUrl: './profile-pic.component.scss'
})
export class ProfilePicComponent {

  constructor(private sharedService: SharedServiceService) {}

  petProfileDetails: PetProfileDetails = {
    petDetails: {
      _id: '',
      owner: '',
      message: '',
      name: 'n',
      species: '',
      breed: '',
      age: 0,
      color: '',
      temperament: '',
      gender: '',
      profilePic: '',
      images: []
    },
    ownerDetails: {
      profilePic: '',
      firstname: '',
      lastname: '',
      phoneNumber: '',
      email: '',
      address: {
        street: '',
        barangay: '',
        municipality: '',
        province: ''
      }
    },
    medicalDetails: {
      vetClinicName: '',
      vetClinicPhoneNumber: '',
      vaccination: '',
      allergies: '',
      medications: ''
    }
  }

  profilePic: string = ``

  visible: boolean = false;

  onSave() {

  }

  onUpload() {
    
  }

  ngOnInit(): void {
    this.sharedService.petProfileDetailsObs.subscribe( val => {
      this.petProfileDetails = val;
      this.profilePic = `https://res.cloudinary.com/ducdal81b/image/upload/${this.petProfileDetails.petDetails.profilePic}`;
    })
  }
}
