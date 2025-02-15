import { Injectable } from '@angular/core';
import { ApiService } from '../api-service.service';
import { User } from '../../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private api: ApiService) { }

  signIn = (url: string, body: User): Observable<User> => {
    return this.api.post(url, body);
  }
}
