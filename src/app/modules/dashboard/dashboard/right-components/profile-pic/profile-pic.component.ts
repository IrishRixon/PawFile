import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PetProfileDetails } from '../../../interfaces/pet-profile-details/pet-profile-details';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';
import { UpdateDetailsFormsService } from '../../../services/update-details-forms/update-details-forms.service';
import { ToastMessage } from '../../../interfaces/toast-message/toast-message';

@Component({
  selector: 'app-profile-pic',
  standalone: false,
  
  templateUrl: './profile-pic.component.html',
  styleUrl: './profile-pic.component.scss'
})
export class ProfilePicComponent {
  constructor(private sharedService: SharedServiceService, private updateDetailsFormsService: UpdateDetailsFormsService, private SSService: SharedServiceService) {}

  @Output() toastMessage: EventEmitter<ToastMessage> = new EventEmitter<ToastMessage>();
  @Output() clearToastMessage: EventEmitter<void> = new EventEmitter<void>();
  @Output() updateProfilePic: EventEmitter<string> = new EventEmitter<string>();

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
      images: [],
      isMissing: false
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
  urlRoot: string = 'https://pawfile-server.onrender.com';

  visible: boolean = false; 

  file!: File;

  emitSelectedFile(event: any) {
    this.file = event.currentFiles[0];
    console.log(this.file);
  }

  onUpload() {
    const toast: ToastMessage = {
      severity: 'info',
      summary: 'Uploading',
      detail: 'Your image is now uploading',
      life: 0,
      sticky: true,
      icon: "pi pi-spin pi-spinner"
    };

    this.toastMessage.emit(toast);  

    const formData: FormData = new FormData();

    formData.append('image', this.file);
    formData.append('_id', this._id);

    this.updateDetailsFormsService.updateProfilePicDetails(`${this.urlRoot}/dashboard/uploadPetImage`, formData)
    .subscribe({
      next: (res) => {
        const toast2: ToastMessage = {
          severity: 'success',
          summary: 'Uploaded',
          detail: 'Your pet image has been uploaded successfully',
          life: 3000,
          sticky: false,
        };

        this.profilePic = `https://res.cloudinary.com/ducdal81b/image/upload/${res.res.profilePic}`;
        this.updateProfilePic.emit(res.res.profilePic);
        
        // this.SSService.setPetProfileDetails(this.petProfileDetails);
        this.clearToastMessage.emit();
        this.toastMessage.emit(toast2);
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
      console.log(this.profilePic, 'resetDP');

    })
  }
}
