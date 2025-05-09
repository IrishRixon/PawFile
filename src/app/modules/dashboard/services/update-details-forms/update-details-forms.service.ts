import { Injectable } from '@angular/core';
import { MedicalDetailsForm, messageDetailsForm, OwnerDetailsForm, PetDetails, PetDetailsForm, PetProfileDetails } from '../../interfaces/pet-profile-details/pet-profile-details';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDetailsFormsService {

  constructor(private api: ApiService) { }

  updatePetDetails = (url: string, body: PetDetailsForm): Observable<PetDetailsForm> => {
    return this.api.update(url, body);
  }

  updateMedicalDetails = (url: string, body: MedicalDetailsForm): Observable<MedicalDetailsForm> => {
    return this.api.update(url, body);
  }

  updateOwnerDetails = (url: string, body: OwnerDetailsForm): Observable<OwnerDetailsForm> => {
    return this.api.update(url, body);
  }

  updateMessageDetails = (url: string, body: messageDetailsForm ): Observable<messageDetailsForm> => {
    return this.api.update(url, body);
  }
}
