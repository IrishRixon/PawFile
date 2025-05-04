import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PetProfileDetails } from '../../interfaces/pet-profile-details/pet-profile-details';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  private petProfileDetails: BehaviorSubject<PetProfileDetails> = new BehaviorSubject<PetProfileDetails>({
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
  })

  petProfileDetailsObs = this.petProfileDetails.asObservable();

  setPetProfileDetails(val: PetProfileDetails) {
    this.petProfileDetails.next(val);
  }
}
