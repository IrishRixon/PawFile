import { Injectable } from '@angular/core';
import { MedicalDetailsForm, MessageDetailsForm, NameForm, OwnerDetailsForm, PetDetails, PetDetailsForm, PetProfileDetails } from '../../interfaces/pet-profile-details/pet-profile-details';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { PetCard } from '../../interfaces/petcards/petcard';

@Injectable({
  providedIn: 'root'
})
export class UpdateDetailsFormsService {

  constructor(private api: ApiService) { }

  updatePetDetails = (url: string, body: PetDetailsForm): Observable<PetDetailsForm> => {
    return this.api.update<PetDetailsForm, PetDetailsForm>(url, body);
  }

  updateMedicalDetails = (url: string, body: MedicalDetailsForm): Observable<MedicalDetailsForm> => {
    return this.api.update<MedicalDetailsForm, MedicalDetailsForm>(url, body);
  }

  updateOwnerDetails = (url: string, body: OwnerDetailsForm): Observable<OwnerDetailsForm> => {
    return this.api.update<OwnerDetailsForm, OwnerDetailsForm>(url, body);
  }

  updateMessageDetails = (url: string, body: MessageDetailsForm ): Observable<MessageDetailsForm> => {
    return this.api.update<MessageDetailsForm, MessageDetailsForm>(url, body);
  }

  updateNameDetails = (url: string, body: NameForm ): Observable<NameForm> => {
    return this.api.update<NameForm, NameForm>(url, body);
  }

  updateProfilePicDetails = (url: string, body: FormData): Observable<{ res: {profilePic: string} }> => {
    return this.api.update<FormData, { res: {profilePic: string} }>(url, body);
  }

  updateMissing = (url: string, body: { isMissing: boolean, _id: string}): Observable<{ isMissing: boolean, error: string}> => {
    return this.api.update<{ isMissing: boolean, _id: string} ,{ isMissing: boolean, error: string}>(url, body);
  }

  postCarouselImage = (url: string, body: FormData): Observable<{ images: string[] }> => {
    return this.api.post<FormData, { images: string[]}>(url, body);
  }

  delete = (url: string): Observable<{ message: string }> => {
    return this.api.delete<{ message: string }>(url);
  }

  postNewPet = (url: string, body: PetDetailsForm): Observable<PetCard> => {
    return this.api.post<PetDetailsForm, PetCard>(url, body);
  }
}
