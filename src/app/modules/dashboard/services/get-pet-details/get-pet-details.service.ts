import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { PetProfileDetails } from '../../interfaces/pet-profile-details/pet-profile-details';

@Injectable({
  providedIn: 'root'
})
export class GetPetDetailsService {

  constructor(private api: ApiService) { }

  getPetDetails = (url: string): Observable<PetProfileDetails> => {
    return this.api.get(url);
  }
}
