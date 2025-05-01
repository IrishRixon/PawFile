import { Injectable } from '@angular/core';
import { DashboardModule } from '../../../dashboard.module';
import { PetProfileDetails } from '../../../interfaces/pet-profile-details/pet-profile-details';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PetProfileDetailsService {

  constructor() { }

  private isPetSelectedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private petProfileDetails: BehaviorSubject<PetProfileDetails | null> = new BehaviorSubject<PetProfileDetails | null>(null);
  isPetSelectedSubjectObs = this.isPetSelectedSubject.asObservable();
  petProfileDetailsObs = this.petProfileDetails.asObservable();

  setIsPetSelected(val: boolean) {
    this.isPetSelectedSubject.next(val);
  }

  setPetProfileDetails(val: PetProfileDetails) {
    this.petProfileDetails.next(val);
  }

  onPetProfileDetailsChanged(val: PetProfileDetails) {
    if(this.petProfileDetails.value != null) {
      if(val !== this.petProfileDetails.value) {
        this.setPetProfileDetails(val);
      }
      this.setIsPetSelected(true);
    }
    
    console.log(this.petProfileDetails.value);
    console.log(this.isPetSelectedSubject.value);
  }
}
