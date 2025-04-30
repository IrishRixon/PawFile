import { Injectable } from '@angular/core';
import { DashboardModule } from '../../../dashboard.module';
import { PetProfileDetails } from '../../../interfaces/pet-profile-details/pet-profile-details';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PetProfileDetailsService {

  constructor() { }

  private isPetSelectedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isPetSelectedSubjectObs = this.isPetSelectedSubject.asObservable();

  petProfileDetails!: PetProfileDetails; 

  setIsPetSelected(val: boolean) {
    this.isPetSelectedSubject.next(val);
  }

  onPetProfileDetailsChanged(val: PetProfileDetails) {
    if(this.petProfileDetails != null) {
      if(val !== this.petProfileDetails) {
        this.petProfileDetails = val;
      }
      this.setIsPetSelected(true);
    }
    
    console.log(this.petProfileDetails);
    console.log(this.isPetSelectedSubject.getValue());
  }
}
