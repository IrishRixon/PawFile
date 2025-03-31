import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { PetCards } from '../../interfaces/petcards/petcard';

@Injectable({
  providedIn: 'root'
})
export class GetPetsCardService {

  constructor(private api: ApiService) { }

  getPetsCard = (url: string): Observable<PetCards> => {
    return this.api.get<PetCards>(url);
  }
}
