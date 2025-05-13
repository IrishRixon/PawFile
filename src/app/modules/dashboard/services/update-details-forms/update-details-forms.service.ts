import { Injectable } from '@angular/core';
import { MedicalDetailsForm, MessageDetailsForm, NameForm, OwnerDetailsForm, PetDetails, PetDetailsForm, PetProfileDetails } from '../../interfaces/pet-profile-details/pet-profile-details';
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

  updateMessageDetails = (url: string, body: MessageDetailsForm ): Observable<MessageDetailsForm> => {
    return this.api.update(url, body);
  }

  updateNameDetails = (url: string, body: NameForm ): Observable<NameForm> => {
    return this.api.update(url, body);
  }

  updateProfilePicDetails = (url: string, body: FormData): Observable<FormData> => {
    return this.api.update(url, body);
  }
}
