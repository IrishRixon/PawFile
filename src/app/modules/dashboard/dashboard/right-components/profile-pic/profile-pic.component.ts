import { Component, Input } from '@angular/core';
import { PetProfileDetails } from '../../../interfaces/pet-profile-details/pet-profile-details';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';
import { UpdateDetailsFormsService } from '../../../services/update-details-forms/update-details-forms.service';

@Component({
  selector: 'app-profile-pic',
  standalone: false,
  
  templateUrl: './profile-pic.component.html',
  styleUrl: './profile-pic.component.scss'
})
export class ProfilePicComponent {
  constructor(private sharedService: SharedServiceService, private updateDetailsFormsService: UpdateDetailsFormsService, private SSService: SharedServiceService) {}

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

  profilePic: string = ``;
  _id!: string;
  urlRoot: string = 'http://localhost:3000/pawfile';

  visible: boolean = false;

  file!: File;

  emitSelectedFile(event: any) {
    this.file = event.currentFiles[0];
    console.log(this.file);
  }

  onUpload() {
    const formData: FormData = new FormData();

    formData.append('image', this.file);
    formData.append('_id', this._id);

    this.updateDetailsFormsService.updateProfilePicDetails(`${this.urlRoot}/dashboard/uploadPetImage`, formData)
    .subscribe({
      next: (res) => {
        this.SSService.setPetProfileDetails(this.petProfileDetails);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  ngOnInit(): void {
    this.sharedService.petProfileDetailsObs.subscribe( val => {
      this.petProfileDetails = val;
      this._id = val.petDetails._id;
      this.profilePic = `https://res.cloudinary.com/ducdal81b/image/upload/${this.petProfileDetails.petDetails.profilePic}`;
    })
  }
}
