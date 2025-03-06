import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../services/api-service.service';
import { Observable } from 'rxjs';
import { PetForm, UserForm } from '../../../interface/forms';
import { ProtectedApiService } from '../../../../../services/protected-api/protected-api.service';

@Injectable({
  providedIn: 'root'
})
export class RequestFormsService {

  constructor(private api: ProtectedApiService) { }

  submitUserForm = (url: string, body: UserForm): Observable<UserForm> => {
    return this.api.post(url, body);
  }

  submitPetForm = (url: string, body: PetForm): Observable<PetForm> => {
    return this.api.post(url, body);
  }
}
